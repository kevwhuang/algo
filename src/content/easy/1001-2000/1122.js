// 1122 - Relative Sort Array

function relativeSortArray(arr1, arr2) {
    const B = new Uint16Array(1001);
    let i = -1, j = -1;
    while (++i < arr1.length) B[arr1[i]]++;
    i = 0;
    while (++j < arr2.length) {
        while (B[arr2[j]]) arr1[i++] = arr2[j], B[arr2[j]]--;
    }
    j = -1;
    while (++j < 1001) {
        while (B[j]) arr1[i++] = j, B[j]--;
    }
    return arr1;
}
