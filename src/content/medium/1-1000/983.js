// 983 - Minimum Cost for Tickets

function mincostTickets(days, costs) {
    const dp = new Uint16Array(days.at(-1) + 1);
    days.forEach(e => dp[e] = 1);
    for (let i = days[0]; i < dp.length; i++) {
        if (dp[i] === 0 && (dp[i] = dp[i - 1])) continue;
        const a = (i && dp[i - 1]) + costs[0];
        const b = (i >= 7 && dp[i - 7]) + costs[1];
        const c = (i >= 30 && dp[i - 30]) + costs[2];
        dp[i] = Math.min(a, b, c);
    }
    return dp.at(-1);
}
