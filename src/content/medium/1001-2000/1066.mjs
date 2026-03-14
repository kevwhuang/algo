// 1066 - Campus Bikes II

function assignBikes(workers, bikes) {
    function dfs(i, mask) {
        if (i === workers.length) return 0;
        if (memo[i][mask]) return memo[i][mask];
        let min = Infinity, j = -1;
        while (++j < bikes.length) {
            if (dict[j] & mask) continue;
            const abs1 = Math.abs(workers[i][0] - bikes[j][0]);
            const abs2 = Math.abs(workers[i][1] - bikes[j][1]);
            min = Math.min(abs1 + abs2 + dfs(i + 1, dict[j] | mask), min);
        }
        return memo[i][mask] = min;
    }
    const memo = Array.from({ length: workers.length }, () => ({}));
    const dict = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    return dfs(0, 0);
}
