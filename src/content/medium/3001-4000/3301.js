// 3301 - Maximize the Total Height of Unique Towers

function maximumTotalSum(maximumHeight) {
    maximumHeight = new Uint32Array(maximumHeight).sort();
    let sum = 0, prev = Infinity;
    for (let i = maximumHeight.length - 1; ~i; i--) {
        if (prev === 1) return -1;
        sum += prev = Math.min(maximumHeight[i], prev - 1);
    }
    return sum;
}
