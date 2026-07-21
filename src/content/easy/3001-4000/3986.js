// 3986. Number of Elapsed Seconds Between Two Times

function secondsBetweenTimes(startTime, endTime) {
    const fn = s => 3600 * s.slice(0, 2) + 60 * s.slice(3, 5) + 1 * s.slice(-2);
    return fn(endTime) - fn(startTime);
}
