// 1562 - Find Latest Group of Size M

function findLatestStep(arr, m) {
    if (arr.length === m) return m;
    let step = -1;
    const sizes = new Uint32Array(arr.length + 2);
    for (let i = 0; i < arr.length; i++) {
        const idx = arr[i];
        const left = sizes[idx - 1];
        const right = sizes[idx + 1];
        if (left === m || right === m) step = i;
        sizes[idx - left] = sizes[idx + right] = left + right + 1;
    }
    return step;
}
