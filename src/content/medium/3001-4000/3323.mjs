// 3323 - Minimize Connected Groups by Inserting Interval

function minConnectedGroups(intervals, k) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > merged.at(-1)[1]) merged.push(intervals[i]);
        else merged.at(-1)[1] = Math.max(intervals[i][1], merged.at(-1)[1]);
    }
    const n = merged.length;
    let min = n;
    for (let l = 0, r = 0; l < n; l++) {
        while (r < n && merged[l][1] + k >= merged[r][0]) r++;
        min = Math.min(n + l - r + 1, min);
    }
    return min;
}
