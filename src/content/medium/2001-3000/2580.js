// 2580 - Count Ways to Group Overlapping Ranges

function countWays(ranges) {
    ranges.sort((a, b) => a[0] - b[0]);
    let groups = 0, i = 0;
    while (i < ranges.length && ++groups) {
        let end = ranges[i][1];
        while (++i < ranges.length && ranges[i][0] <= end) {
            if (ranges[i][1] > end) end = ranges[i][1];
        }
    }
    let ways = 1;
    for (let n = 1; n <= groups; n++) {
        ways = 2 * ways % 1000000007;
    }
    return ways;
}
