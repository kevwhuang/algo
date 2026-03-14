// 941 - Valid Mountain Array

function validMountainArray(arr) {
    if (arr.length < 3 || arr[0] > arr[1]) return false;
    let isIncreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false;
        if (isIncreasing && arr[i] < arr[i - 1]) isIncreasing = false;
        else if (!isIncreasing && arr[i] >= arr[i - 1]) return false;
    }
    return !isIncreasing;
}
