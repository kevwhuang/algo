const RANGE_SIZE = 1_000;

export function getExtension(problem: Problem): string {
    return problem.database ? (problem.paid ? '.p.sql' : '.sql') : (problem.paid ? '.mjs' : '.js');
}

export function getRange(id: number): string {
    const start = Math.floor((id - 1) / RANGE_SIZE) * RANGE_SIZE + 1;

    const end = start + RANGE_SIZE - 1;

    return `${start}-${end}`;
}
