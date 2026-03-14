// 3424 - Minimum Cost to Make Arrays Identical

function minCost(arr, brr, k) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += Math.abs(arr[i] - brr[i]);
    }
    if (acc <= k) return acc;
    arr = new Int32Array(arr).sort();
    brr = new Int32Array(brr).sort();
    for (let i = 0; i < arr.length; i++) {
        k += Math.abs(arr[i] - brr[i]);
    }
    return Math.min(acc, k);
}
