// 1124 - Longest Well-Performing Interval

function longestWPI(hours) {
    let max = 0, acc = 0;
    const map = new Map();
    for (let i = 0; i < hours.length; i++) {
        acc += hours[i] > 8 ? 1 : -1;
        if (!map.has(acc)) map.set(acc, i);
        if (acc > 0) max = i + 1;
        else if (map.has(acc - 1)) {
            max = Math.max(i - map.get(acc - 1), max);
        }
    }
    return max;
}
