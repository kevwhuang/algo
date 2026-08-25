import { Glob, file, write } from 'bun';

interface Question {
    difficulty: string;
    paidOnly: boolean;
    questionFrontendId: string;
    title: string;
    titleSlug: string;
    topicTags: { slug: string }[];
}

interface QuestionsResponse {
    data?: { problemsetQuestionListV2?: { questions?: Question[] } };
}

interface Solution {
    content: string;
    extension: string;
    path: string;
}

const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const INDENT_SPACES = 4;
const PAGE_QUESTIONS = 100;

const QUERY = `
    query ($limit: Int!, $skip: Int!) {
        problemsetQuestionListV2(
            categorySlug: ""
            filters: { filterCombineType: ALL }
            limit: $limit
            skip: $skip
        ) {
            questions {
                difficulty
                paidOnly
                questionFrontendId
                title
                titleSlug
                topicTags { slug }
            }
        }
    }
`;

const RANGE_PROBLEMS = 1_000;

const contentRoot = `${import.meta.dir}/../src/content`;
const problems: Problem[] = [];
const solutions = new Map<Problem, Solution>();

let offset = 0;

function getPath(problem: Problem, extension: string) {
    const rangeStart = Math.floor((problem.id - 1) / RANGE_PROBLEMS) * RANGE_PROBLEMS + 1;

    return `${problem.difficulty}/${rangeStart}-${rangeStart + RANGE_PROBLEMS - 1}/${problem.id}${extension}`;
}

function getTitleKey(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '');
}

while (true) {
    const response = await fetch('https://leetcode.com/graphql', {
        body: JSON.stringify({ query: QUERY, variables: { limit: PAGE_QUESTIONS, skip: offset } }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
    });

    if (!response.ok) throw new Error(`LeetCode API ${response.status}`);

    const { data }: QuestionsResponse = await response.json();

    const questions = data?.problemsetQuestionListV2?.questions;

    if (!questions) throw new Error('LeetCode API returned no data');
    if (!questions.length) break;

    problems.push(...questions.map(question => ({
        database: question.topicTags.some(tag => tag.slug === 'database'),
        difficulty: question.difficulty.toLowerCase(),
        id: Number(question.questionFrontendId),
        paid: question.paidOnly,
        slug: question.titleSlug,
        title: question.title.replaceAll('\u2019', '\'').replace(/\s+/g, ' ').trim(),
    })));

    offset += PAGE_QUESTIONS;
}

if (!problems.length) throw new Error('LeetCode API returned no problems');

problems.sort((a, b) => a.id - b.id);

const problemsById = new Map(problems.map(problem => [problem.id, problem]));
const problemsByKey = new Map(problems.map(problem => [getTitleKey(problem.title), problem]));

for (const path of new Glob('*/[0-9]*/*').scanSync(contentRoot)) {
    const content = await file(`${contentRoot}/${path}`).text();

    const name = path.slice(path.lastIndexOf('/') + 1);

    const header = content.match(HEADER_PATTERN);

    const headerProblem = header && problemsByKey.get(getTitleKey(header[3]));

    const problem = headerProblem ?? problemsById.get(parseInt(name));

    if (!problem) throw new Error(`Unmatched solution ${path}`);
    if (solutions.has(problem)) throw new Error(`Duplicate solution ${path}`);

    solutions.set(problem, { content, extension: name.slice(name.indexOf('.')), path });
}

const moves = problems.flatMap((problem) => {
    const solution = solutions.get(problem);

    if (!solution) return [];

    const path = getPath(problem, solution.extension);

    return path === solution.path ? [] : [{ path, problem, solution }];
});

await write(`${contentRoot}/problems.json`, JSON.stringify(problems, null, INDENT_SPACES));
await Promise.all(moves.map(move => file(`${contentRoot}/${move.solution.path}`).unlink()));

for (const { path, problem, solution } of moves) {
    await write(`${contentRoot}/${path}`, solution.content.replace(HEADER_PATTERN, `$1 ${problem.id}. $3`));
}

for (const problem of problems) {
    if (solutions.has(problem)) continue;

    const commentPrefix = problem.database ? '--' : '//';
    const extension = problem.database ? (problem.paid ? '.p.sql' : '.sql') : (problem.paid ? '.mjs' : '.js');

    await write(`${contentRoot}/${getPath(problem, extension)}`, `${commentPrefix} ${problem.id}. ${problem.title}\n\n\n`);
}
