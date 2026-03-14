// 3388 - Count Beautiful Splits in an Array

function beautifulSplits(nums) {
    const fn = () => new Uint16Array(5001);
    if (!this.dp) dp = Array.from({ length: 5001 }, fn);
    const n = nums.length, nn = n - 1, nnn = n - 2;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }
    for (let i = nn; ~i; i--) {
        for (let j = i; j < n; j++) {
            if (nums[i] === nums[j]) dp[i][j] = dp[i + 1][j + 1] + 1;
        }
    }
    let res = 0;
    for (let i = 0; i < nnn; i++) {
        for (let j = i + 1; j < nn; j++) {
            if (i + 1 <= j - i && i + 1 <= dp[0][i + 1]) res++;
            else if (j - i <= n - j && j - i <= dp[i + 1][j + 1]) res++;
        }
    }
    return res;
}
