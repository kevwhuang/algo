// 849 - Maximize Distance to Closest Person

function maxDistToClosest(seats) {
    let max = 1, first = null, prev = null;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) continue;
        if (first === null) first = i;
        max = Math.max(((i - prev) / 2) >> 0, max);
        prev = i;
    }
    return Math.max(max, first, seats.length - prev - 1);
}
