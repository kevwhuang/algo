// 3693 - Climbing Stairs II

function climbStairs(n, costs) {
    for (let i = 0; i < n; i++) {
        const a = i >= 1 ? costs[i - 1] : 0;
        const b = i >= 2 ? costs[i - 2] : 0;
        const c = i >= 3 ? costs[i - 3] : 0;
        costs[i] += Math.min(a + 1, b + 4, c + 9);
    }
    return costs[n - 1];
}
