// 1619 - Mean of Array After Removing Some Elements

function trimMean(arr) {
    arr = new Uint32Array(arr).sort();
    let sum = 0;
    const n = arr.length / 20;
    for (let i = n; i < arr.length - n; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - n - n);
}
