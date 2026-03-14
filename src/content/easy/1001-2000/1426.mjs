// 1426 - Counting Elements

function countElements(arr) {
    let count = 0;
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] + 1)) count++;
    }
    return count;
}
