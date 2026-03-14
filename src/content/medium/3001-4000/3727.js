// 3727 - Maximum Alternating Sum of Squares

function maxAlternatingSum(nums) {
    const arr = new Uint16Array(nums.length);
    nums.forEach((e, i) => arr[i] = Math.abs(e));
    arr.sort();
    let res = 0, l = 0, r = arr.length - 1;
    while (l <= r) {
        res += arr[r--] ** 2;
        if (l > r) break;
        res -= arr[l++] ** 2;
    }
    return res;
}
