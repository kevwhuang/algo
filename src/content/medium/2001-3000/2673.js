// 2673 - Make Costs of Paths Equal in a Binary Tree

function minIncrements(n, cost) {
    let ops = 0, i = n / 2 - 1 >> 0;
    while (~i) {
        const left = cost[2 * i + 1], right = cost[2 * i + 2];
        cost[i--] += Math.max(left, right);
        ops += Math.abs(left - right);
    }
    return ops;
}
