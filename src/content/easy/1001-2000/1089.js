// 1089 - Duplicate Zeros

function duplicateZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) continue;
        arr.splice(i++, 0, 0);
        arr.pop();
    }
}
