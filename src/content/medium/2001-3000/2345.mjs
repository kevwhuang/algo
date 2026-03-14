// 2345 - Finding the Number of Visible Mountains

function visibleMountains(peaks) {
    for (let i = 0; i < peaks.length; i++) {
        peaks[i][0] -= peaks[i][1];
        peaks[i][1] = peaks[i][0] + 2 * peaks[i][1];
    }
    peaks.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let mountains = 0, peak = -Infinity;
    for (let i = 0; i < peaks.length; i++) {
        if (peaks[i][1] <= peak) continue;
        peak = peaks[i][1];
        L: if (i + 1 < peaks.length) {
            if (peaks[i][0] !== peaks[i + 1][0]) break L;
            if (peaks[i][1] === peaks[i + 1][1]) continue;
        }
        mountains++;
    }
    return mountains;
}
