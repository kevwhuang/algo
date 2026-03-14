// 1753 - Maximum Score From Removing Stones

function maximumScore(a, b, c) {
    const sum = a + b + c;
    return Math.min(sum - Math.max(...arguments), sum / 2 >> 0);
}
