// 2335 - Minimum Amount of Time to Fill Cups

function fillCups(amount) {
    let max = 0, sum = 0;
    for (let i = 0; i < 3; i++) {
        max = Math.max(amount[i], max);
        sum += amount[i];
    }
    return Math.max(max, Math.ceil(sum / 2));
}
