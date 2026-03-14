// 1287 - Element Appearing More Than 25% in Sorted Array

function findSpecialInteger(arr) {
    let res = 0, i = 0;
    const tgt = arr.length / 4;
    while (true) {
        res = i && arr[i - 1] === arr[i] ? res + 1 : 1;
        if (res > tgt) return arr[i];
        i++;
    }
}
