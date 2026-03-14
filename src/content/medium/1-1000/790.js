// 790 - Domino and Tromino Tiling

function numTilings(n) {
    function init() {
        memo = new Uint32Array(1001);
        memo[1] = 1, memo[2] = 2, memo[3] = 5;
        for (let i = 4; i <= 1000; i++) {
            memo[i] = memo[i - 3] + 2 * memo[i - 1];
            memo[i] %= 1000000007;
        }
    }
    if (this.memo === undefined) init();
    return memo[n];
}
