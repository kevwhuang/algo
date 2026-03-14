// 1646 - Get Maximum in Generated Array

function getMaximumGenerated(n) {
    if (n === 0) return 0;
    let max = 1, i = 0;
    const arr = [0, 1];
    while (++i) {
        if (--n === 0) break;
        max = Math.max(arr[i + i] = arr[i], max);
        if (--n === 0) break;
        max = Math.max(arr[i + i + 1] = arr[i] + arr[i + 1], max);
    }
    return max;
}
