// 1574 - Shortest Subarray to Be Removed to Make Array Sorted

function findLengthOfShortestSubarray(arr) {
    const len = arr.length;
    let l = 1, r = len - 2;
    while (l < len && arr[l - 1] <= arr[l]) l++;
    while (~r && arr[r] <= arr[r + 1]) r--;
    if (len === 1 || --l > ++r) return 0;
    let min = Math.min(len - l + 1, r);
    const bound = r;
    r = len - 1;
    while (~l) {
        while (r >= bound && arr[l] <= arr[r]) r--;
        min = Math.min(r - l--, min);
    }
    return min;
}
