// 1689 - Partitioning Into Minimum Number of Deci-Binary Numbers

function minPartitions(n) {
    for (let d = 9; d > 0; d--) {
        if (n.includes(d)) return d;
    }
    return 0;
}
