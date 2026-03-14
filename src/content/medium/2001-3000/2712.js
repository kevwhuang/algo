// 2712 - Minimum Cost to Make All Characters Equal

function minimumCost(s) {
    let cost = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) continue;
        cost += Math.min(i, s.length - i);
    }
    return cost;
}
