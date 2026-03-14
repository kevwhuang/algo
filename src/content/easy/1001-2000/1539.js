// 1539 - Kth Missing Positive Number

function findKthPositive(arr, k) {
    let num = 0, i = 0;
    const n = arr.length;
    while (k) {
        ++num === arr[i] ? i++ : k--;
        if (i === n) return num + k;
    }
    return num;
}
