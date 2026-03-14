// 495 - Teemo Attacking

function findPoisonedDuration(timeSeries, duration) {
    let time = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        const prev = timeSeries[i - 1], cur = timeSeries[i];
        if (cur >= prev + duration) time += duration;
        else time += cur - prev;
    }
    return time;
}
