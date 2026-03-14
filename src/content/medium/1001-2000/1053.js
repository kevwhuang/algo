// 1053 - Previous Permutation With One Swap

function prevPermOpt1(arr) {
    let i = arr.length - 2;
    while (i && arr[i] <= arr[i + 1]) i--;
    let index = -1;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) continue;
        if (index === -1 || arr[index] < arr[j]) index = j;
    }
    if (index !== -1) [arr[i], arr[index]] = [arr[index], arr[i]];
    return arr;
}
