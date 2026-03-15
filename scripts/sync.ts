interface Problem {
    database: boolean;
    difficulty: string;
    id: number;
    paid: boolean;
    slug: string;
    title: string;
}

const PAGE_SIZE = 100;
const QUERY = `
    query ($skip: Int!, $limit: Int!) {
        problemsetQuestionListV2(
            categorySlug: ""
            skip: $skip
            limit: $limit
            filters: { filterCombineType: ALL }
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
const RANGE_SIZE = 1000;

function getContent(problem: Problem): string {
    const ext = getExt(problem);
    const comment = ext.includes('.sql') ? '--' : '//';
    return `${comment} ${problem.id}. ${problem.title}\n\n\n`;
}

function getExt(problem: Problem): string {
    if (problem.database) return problem.paid ? '.p.sql' : '.sql';
    return problem.paid ? '.mjs' : '.js';
}

function getRange(id: number): string {
    const start = Math.floor((id - 1) / RANGE_SIZE) * RANGE_SIZE + 1;
    const end = start + RANGE_SIZE - 1;
    return `${start}-${end}`;
}

const problems: Problem[] = [];
let skip = 0;

while (true) {
    const response = await fetch('https://leetcode.com/graphql', {
        body: JSON.stringify({ query: QUERY, variables: { limit: PAGE_SIZE, skip } }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
    });

    const { data } = await response.json();
    const questions = data.problemsetQuestionListV2.questions;
    if (questions.length === 0) break;

    for (const question of questions) {
        problems.push({
            database: question.topicTags.some((tag: { slug: string }) => tag.slug === 'database'),
            difficulty: question.difficulty.toLowerCase(),
            id: Number(question.questionFrontendId),
            paid: question.paidOnly,
            slug: question.titleSlug,
            title: question.title,
        });
    }

    skip += PAGE_SIZE;
}

problems.sort((a, b) => a.id - b.id);
await Bun.write('src/content/problems.json', JSON.stringify(problems, null, 4));

for (const problem of problems) {
    const range = getRange(problem.id);
    const dir = `src/content/${problem.difficulty}/${range}`;
    const pattern = new Bun.Glob(`${problem.id}.*`);
    const matches = [...pattern.scanSync(dir)];

    if (matches.length === 0) {
        await Bun.write(`${dir}/${problem.id}${getExt(problem)}`, getContent(problem));
    }
}

export {};
