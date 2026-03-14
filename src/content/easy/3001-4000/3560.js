// 3560 - Find Minimum Log Transportation Cost

function minCuttingCost(n, m, k) {
    return n <= k && m <= k ? 0 : k * Math.max(n - k, m - k);
}
