// 1057 - Campus Bikes

function assignBikes(workers, bikes) {
    const arr = Array.from({ length: 1999 }, () => []);
    for (let i = 0; i < workers.length; i++) {
        const r1 = workers[i][0], c1 = workers[i][1];
        for (let j = 0; j < bikes.length; j++) {
            const r2 = bikes[j][0], c2 = bikes[j][1];
            arr[Math.abs(r1 - r2) + Math.abs(c1 - c2)].push([i, j]);
        }
    }
    for (let i = 1; i < 1999; i++) {
        const dists = arr[i];
        for (let j = 0; j < dists.length; j++) {
            const ii = dists[j][0], jj = dists[j][1];
            if (Number.isInteger(workers[ii])) continue;
            if (bikes[jj] === null) continue;
            workers[ii] = jj, bikes[jj] = null;
        }
    }
    return workers;
}
