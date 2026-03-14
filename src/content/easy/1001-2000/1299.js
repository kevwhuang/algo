// 1299 - Replace Elements With Greatest Element on Right Side

function replaceElements(arr) {
    for (let max = arr.at(-1), i = arr.length - 2; ~i; i--) {
        const cur = arr[i];
        arr[i] = max, max = Math.max(cur, max);
    }
    arr[arr.length - 1] = -1;
    return arr;
}
