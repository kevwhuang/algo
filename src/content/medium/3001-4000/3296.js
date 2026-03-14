// 3296 - Minimum Number of Seconds to Make Mountain Height Zero

function minNumberOfSeconds(mountainHeight, workerTimes) {
    let l = 1, r = 1e16;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        let acc = 0;
        for (let i = 0; i < workerTimes.length; i++) {
            const rate = workerTimes[i];
            acc += Math.floor((-1 + Math.sqrt(1 + 8 * m / rate)) / 2);
        }
        if (acc < mountainHeight) l = m + 1;
        else r = m - 1;
    }
    return l;
}
