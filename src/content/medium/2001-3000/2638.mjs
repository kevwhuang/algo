// 2638 - Count the Number of K-Free Subsets

function countTheNumOfKFreeSubsets(nums, k) {
    function init() {
        dp = new Array(51), dp[0] = 1, dp[1] = 2;
        for (let i = 2; i < 51; i++) {
            dp[i] = dp[i - 2] + dp[i - 1];
        }
    }
    if (!this.dp) init();
    const arr = new Uint16Array(nums).sort();
    const map = new Map();
    arr.forEach(e => map.set(e, map.get(e - k) + 1 || 1) && map.delete(e - k));
    let res = 1;
    map.values().forEach(e => res *= dp[e]);
    return res;
}
