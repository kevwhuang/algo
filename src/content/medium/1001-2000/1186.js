// 1186 - Maximum Subarray Sum With One Deletion

function maximumSum(arr) {
    let res = arr[0], a = res, b = res, i = 0;
    while (++i < arr.length) {
        a = Math.max(b, a + arr[i]);
        b = Math.max(arr[i], b + arr[i]);
        res = Math.max(a, b, res);
    }
    return res;
}
