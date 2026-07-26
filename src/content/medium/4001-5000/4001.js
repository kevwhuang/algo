// 4001. Aggregate Two Time Series

function aggregateTimeSeries(series1, series2) {
    const res = [], m = series1.length, n = series2.length;
    let i = 0, j = 0;
    while (i < m && j < n) {
        const a = series1[i], b = series2[j], min = Math.min(a[0], b[0]);
        res.push([min, a[1] + b[1]]);
        if (a[0] === min) i++;
        if (b[0] === min) j++;
    }
    while (i < m) res.push(series1[i++]);
    while (j < n) res.push(series2[j++]);
    return res;
}
