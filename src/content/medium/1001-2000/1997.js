// 1997 - First Day Where You Have Been in All the Rooms

function firstDayBeenInAllRooms(nextVisit) {
    const n = nextVisit.length, dp = new Uint32Array(n);
    for (let i = 1; i < n; i++) {
        const sum = 2 * dp[i - 1] - dp[nextVisit[i - 1]];
        dp[i] = (sum + 1000000009) % 1000000007;
    }
    return dp[n - 1];
}
