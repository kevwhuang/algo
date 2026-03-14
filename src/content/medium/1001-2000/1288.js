// 1288 - Remove Covered Intervals

function removeCoveredIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let count = 0, end = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] <= end) continue;
        count++;
        end = intervals[i][1];
    }
    return count;
}
