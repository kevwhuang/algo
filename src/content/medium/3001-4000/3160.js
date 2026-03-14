// 3160 - Find the Number of Distinct Colors Among the Balls

function queryResults(limit, queries) {
    const colors = new Map(), counts = new Map();
    for (let i = 0; i < queries.length; i++) {
        const ball = queries[i][0];
        if (colors.has(ball)) {
            const prev = colors.get(ball);
            if (counts.get(prev) === 1) counts.delete(prev);
            else counts.set(prev, counts.get(prev) - 1);
        }
        const color = queries[i][1];
        colors.set(ball, color);
        counts.set(color, (counts.get(color) ?? 0) + 1);
        queries[i] = counts.size;
    }
    return queries;
}
