// 3789 - Minimum Cost to Acquire Required Items

function minimumCost(cost1, cost2, costBoth, need1, need2) {
    const min = Math.min(need1, need2);
    const a = Math.min(cost1 + cost2, costBoth) * min;
    const b = Math.min(cost1, costBoth) * (need1 - min);
    const c = Math.min(cost2, costBoth) * (need2 - min);
    return a + b + c;
}
