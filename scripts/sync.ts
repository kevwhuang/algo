import { getExtension, getRange } from './utils';

const INDENT = 4;
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

const problems: Problem[] = [];

let skip = 0;

while (true) {
    const response = await fetch('https://leetcode.com/graphql', {
        body: JSON.stringify({ query: QUERY, variables: { limit: PAGE_SIZE, skip } }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
    });

    const { data } = await response.json();

    const questions = data?.problemsetQuestionListV2?.questions;

    if (!questions?.length) break;

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

await Bun.write('src/content/problems.json', JSON.stringify(problems, null, INDENT));

for (const problem of problems) {
    const range = getRange(problem.id);

    const directory = `src/content/${problem.difficulty}/${range}`;
    const glob = new Bun.Glob(`${problem.id}.*`);

    const matches = [...glob.scanSync(directory)];

    if (matches.length === 0) {
        const extension = getExtension(problem);

        const prefix = extension.includes('.sql') ? '--' : '//';

        const content = `${prefix} ${problem.id}. ${problem.title}\n\n\n`;

        const filePath = `${directory}/${problem.id}${extension}`;

        await Bun.write(filePath, content);
    }
}
