// 2635 - Apply Transform Over Each Element in Array

function map(arr, fn) {
    arr.forEach((e, i) => arr[i] = fn(e, i));
    return arr;
}
