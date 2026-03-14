// 1575 - Count All Possible Routes

function countRoutes(locations, start, finish, fuel) {
    function dfs(i, acc) {
        if (~memo[i][acc]) return memo[i][acc];
        let sum = Number(i === finish);
        for (let j = 0; j < m; j++) {
            if (j === i) continue;
            const abs = Math.abs(locations[j] - locations[i]);
            if (abs <= acc) sum = (sum + dfs(j, acc - abs)) % 1000000007;
        }
        return memo[i][acc] = sum;
    }
    const m = locations.length, n = fuel + 1;
    const memo = Array.from({ length: m }, () => new Int32Array(n).fill(-1));
    return dfs(start, fuel);
}
