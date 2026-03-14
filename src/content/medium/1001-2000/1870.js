// 1870 - Minimum Speed to Arrive on Time

function minSpeedOnTime(dist, hour) {
    let l = 1, r = 1e7;
    const bound = dist.length - 1;
    if (hour < bound) return -1;
    while (l <= r) {
        const m = l + r >> 1;
        let time = 0;
        for (let i = 0; i < bound; i++) {
            time += Math.ceil(dist[i] / m);
        }
        time += dist[bound] / m;
        if (time > hour) l = m + 1;
        else r = m - 1;
    }
    return r === 1e7 ? -1 : r + 1;
}
