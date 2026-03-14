// 2655 - Find Maximal Uncovered Ranges

function findMaximalUncoveredRanges(n, ranges) {
    if (ranges.length === 0) return [[0, n - 1]];
    ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const merged = [ranges[0]];
    for (let i = 1; i < ranges.length; i++) {
        const end = merged.length - 1;
        if (merged[end][1] < ranges[i][0]) merged.push(ranges[i]);
        else merged[end][1] = Math.max(ranges[i][1], merged[end][1]);
    }
    const res = [];
    if (merged[0][0] > 0) res.push([0, merged[0][0] - 1]);
    for (let i = 1; i < merged.length; i++) {
        const start = merged[i - 1][1] + 1;
        const end = merged[i][0] - 1;
        if (start <= end) res.push([start, end]);
    }
    const tail = merged[merged.length - 1][1];
    if (tail + 1 < n) res.push([tail + 1, n - 1]);
    return res;
}
