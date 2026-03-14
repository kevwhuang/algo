// 1732 - Find the Highest Altitude

function largestAltitude(gain) {
    let max = 0, acc = 0;
    for (let i = 0; i < gain.length; i++) {
        acc += gain[i], max = Math.max(acc, max);
    }
    return max;
}
