// 3951. Minimum Energy to Maintain Brightness

function minEnergy(n, brightness, intervals) {
    const M = intervals.sort((a, b) => a[0] - b[0]);
    let r = M[0][1], sum = r - M[0][0] + 1;
    for (let i = 1; i < M.length; i++) {
        const ll = M[i][0], rr = M[i][1];
        if (ll <= r) sum += Math.max(0, rr - r), r = Math.max(rr, r);
        else sum += rr - ll + 1, r = rr;
    }
    return sum * Math.ceil(brightness / 3);
}
