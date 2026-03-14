// 1775 - Equal Sum Arrays With Minimum Number of Operations

function minOperations(nums1, nums2) {
    function generate(nums) {
        const bucket = new Array(7).fill(0);
        for (let i = 0; i < nums.length; i++) {
            bucket[nums[i]]++;
        }
        return [bucket, bucket.reduce((s, e, n) => s + e * n)];
    }
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    if (6 * nums1.length < nums2.length) return -1;
    let [bucket1, sum1] = generate(nums1);
    let [bucket2, sum2] = generate(nums2);
    if (sum1 > sum2) {
        [bucket1, bucket2] = [bucket2, bucket1];
        [sum1, sum2] = [sum2, sum1];
    }
    bucket1[6] = bucket2[1] = 0;
    let ops = 0, n1 = 1, n2 = 6;
    while (sum1 < sum2) {
        while (bucket1[n1] && sum1 < sum2) {
            ops++;
            bucket1[n1]--;
            sum1 += 6 - n1;
        }
        while (bucket2[n2] && sum1 < sum2) {
            ops++;
            bucket2[n2]--;
            sum2 -= n2 - 1;
        }
        n1++, n2--;
    }
    return ops;
}
