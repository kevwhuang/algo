// 788 - Rotated Digits

function rotatedDigits(n) {
    function init() {
        dp = new Uint16Array(10001);
        const dict = { 0: 0, 1: 1, 2: 5, 5: 2, 6: 9, 8: 8, 9: 6 };
        for (let i = 2; i < 10001; i++) {
            let next = 0, cur = i, k = 1;
            while (cur) {
                if (dict[cur % 10] === undefined && (next = i)) break;
                next += k * dict[cur % 10];
                cur = cur / 10 >> 0;
                k *= 10;
            }
            dp[i] = dp[i - 1] + (next !== i);
        }
    }
    if (this.dp === undefined) init();
    return dp[n];
}
