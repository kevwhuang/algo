// 1191 - K-Concatenation Maximum Sum

function kConcatenationMaxSum(arr, k) {
    let max1 = 0, max2 = 0, acc1 = 0, acc2 = 0;
    for (let i = 0; i < arr.length; i++) {
        acc1 = Math.max(arr[i], acc1 + arr[i]);
        acc2 += arr[i];
        max1 = Math.max(acc1, max1);
        max2 = Math.max(acc2, max2);
    }
    if (k === 1) return max1;
    let max3 = 0, acc3 = 0;
    for (let i = arr.length - 1; ~i; i--) {
        acc3 += arr[i];
        max3 = Math.max(acc3, max3);
    }
    const sum = max3 + Math.max(0, (k - 2) * acc3) + max2;
    return Math.max(max1, sum) % 1000000007;
}
