// 2333 - Minimum Sum of Squared Difference

function minSumSquareDiff(nums1, nums2, k1, k2) {
    const arr = new Array(nums1.length);
    nums1.forEach((_, i) => arr[i] = Math.abs(nums1[i] - nums2[i]));
    arr.sort((a, b) => b - a);
    let k = k1 + k2, i = 0;
    while (++i < arr.length) {
        const ops = i * (arr[i - 1] - arr[i]);
        if (k <= ops) break;
        k -= ops;
    }
    const num = arr[i - 1] - (k / i >> 0);
    let sum = (i - k % i) * Math.max(num, 0) ** 2;
    sum += (k % i) * Math.max(num - 1, 0) ** 2;
    while (i < arr.length) sum += arr[i++] ** 2;
    return sum;
}
