interface Problem {
    database: boolean;
    difficulty: string;
    id: number;
    paid: boolean;
    slug: string;
    title: string;
}

const RANGE_SIZE = 1000;

export function getExt(problem: Problem): string {
    if (problem.database) return problem.paid ? '.p.sql' : '.sql';
    return problem.paid ? '.mjs' : '.js';
}

export function getRange(id: number): string {
    const start = Math.floor((id - 1) / RANGE_SIZE) * RANGE_SIZE + 1;
    const end = start + RANGE_SIZE - 1;
    return `${start}-${end}`;
}
