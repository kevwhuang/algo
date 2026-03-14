// 2144 - Minimum Cost of Buying Candies With Discount

function minimumCost(cost) {
    cost.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < cost.length; i += 3) {
        res += cost[i] + (i + 1 < cost.length && cost[i + 1]);
    }
    return res;
}
