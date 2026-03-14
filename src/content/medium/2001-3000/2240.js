// 2240 - Number of Ways to Buy Pens and Pencils

function waysToBuyPensPencils(total, cost1, cost2) {
    if (cost1 < cost2) [cost1, cost2] = [cost2, cost1];
    let ways = 0;
    while (total >= 0) {
        ways += ~~(total / cost2) + 1;
        total -= cost1;
    }
    return ways;
}
