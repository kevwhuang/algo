// 539 - Minimum Time Difference

function findMinDifference(timePoints) {
    const calc = (t1, t2) => Math.min(t2 - t1, 1440 + t1 - t2);
    const arr = timePoints;
    for (let i = 0; i < timePoints.length; i++) {
        arr[i] = 60 * arr[i].slice(0, 2) + Number(arr[i].slice(3));
    }
    arr.sort((a, b) => a - b);
    let min = calc(arr[0], arr.at(-1));
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(calc(arr[i - 1], arr[i]), min);
        if (min === 0) return 0;
    }
    return min;
}
