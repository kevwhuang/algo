// 2187 - Minimum Time to Complete Trips

function minimumTime(time, totalTrips) {
    let l = 1, r = Math.min(...time) * totalTrips;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        let trips = 0;
        for (let i = 0; i < time.length; i++) {
            trips += Math.floor(m / time[i]);
        }
        if (trips < totalTrips) l = m + 1;
        else r = m;
    }
    return r;
}
