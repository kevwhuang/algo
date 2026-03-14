// 2918 - Minimum Equal Sum of Two Arrays After Replacing Zeros

function minSum(nums1, nums2) {
    let sum1 = 0, sum2 = 0, zeros1 = 0, zeros2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i]) sum1 += nums1[i];
        else zeros1++;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i]) sum2 += nums2[i];
        else zeros2++;
    }
    if (sum1 === sum2) {
        if (!zeros1 && !zeros2) return sum1 === sum2 ? sum1 : -1;
        if (!zeros1 || !zeros2) return -1;
        return Math.max(sum1 + zeros1, sum2 + zeros2);
    }
    if (sum1 > sum2) {
        let temp = sum1;
        sum1 = sum2;
        sum2 = temp;
        temp = zeros1;
        zeros1 = zeros2;
        zeros2 = temp;
    }
    if (!zeros1 && !zeros2) return -1;
    if (!zeros1) return -1;
    if (!zeros2) return sum1 + zeros1 <= sum2 ? sum2 : -1;
    return Math.max(sum1 + zeros1, sum2 + zeros2);
}
