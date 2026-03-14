// 3027 - Find the Number of Ways to Place People II

function numberOfPairs(points) {
    let res = 0;
    const M = points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const n = M.length;
    for (let i = 0; i < n; i++) {
        const y = M[i][1];
        for (let prev = -Infinity, j = i + 1; j < n; j++) {
            const yy = M[j][1];
            if (yy <= y && yy > prev) res++, prev = yy;
        }
    }
    return res;
}
