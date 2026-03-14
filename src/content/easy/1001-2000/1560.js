// 1560 - Most Visited Sector in a Circular Track

function mostVisited(n, rounds) {
    const res = [], start = rounds[0], end = rounds.at(-1);
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            res.push(i);
        }
    } else {
        for (let i = 1; i <= end; i++) {
            res.push(i);
        }
        for (let i = start; i <= n; i++) {
            res.push(i);
        }
    }
    return res;
}
