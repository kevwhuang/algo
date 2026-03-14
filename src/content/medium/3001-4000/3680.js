// 3680 - Generate Schedule

function generateSchedule(n) {
    if (n < 5) return [];
    const res = [];
    for (let d = 2; d < n - 1; d++) {
        for (let i = 0; i < n; i++) {
            res.push([i, (i + d) % n]);
        }
    }
    for (let i = 0; i < n; i++) {
        res.push([i, (i + 1) % n], [(i + n - 1) % n, (i + n - 2) % n]);
    }
    return res;
}
