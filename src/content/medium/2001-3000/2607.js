// 2607 - Make K-Subarray Sums Equal

function makeSubKSumEqual(arr, k) {
    let ops = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === null) continue;
        const group = [];
        for (let j = i; arr[j]; j = (j + k) % len) {
            group.push(arr[j]);
            arr[j] = null;
        }
        group.sort((a, b) => a - b);
        const med = group[group.length / 2 >> 0];
        for (let j = 0; j < group.length; j++) {
            ops += Math.abs(group[j] - med);
        }
    }
    return ops;
}
