// 1672 - Richest Customer Wealth

function maximumWealth(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        max = Math.max(accounts[i].reduce((s, e) => s + e), max);
    }
    return max;
}
