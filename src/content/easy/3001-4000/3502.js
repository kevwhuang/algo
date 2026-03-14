// 3502 - Minimum Cost to Reach Every Position

function minCosts(cost) {
    let min = cost[0], i = 0;
    while (++i < cost.length) cost[i] = min = Math.min(cost[i], min);
    return cost;
}
