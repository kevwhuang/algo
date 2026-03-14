// 852 - Peak Index in a Mountain Array

function peakIndexInMountainArray(arr) {
    let l = 1, r = arr.length - 2;
    while (l <= r) {
        const m = (l + r) >> 1;
        if (arr[m - 1] < arr[m] && arr[m] < arr[m + 1]) l = m + 1;
        else if (arr[m - 1] > arr[m] && arr[m] > arr[m + 1]) r = m - 1;
        else return m;
    }
}
