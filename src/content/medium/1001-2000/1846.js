// 1846 - Maximum Element After Decreasing and Rearranging

function maximumElementAfterDecrementingAndRearranging(arr) {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.min(arr[i - 1] + 1, arr[i]);
    }
    return arr.at(-1);
}
