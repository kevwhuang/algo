// 2605 - Form Smallest Number From Two Digit Arrays

function minNumber(nums1, nums2) {
    let common = Infinity, min1 = Infinity;
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (nums2.includes(num)) common = Math.min(num, common);
        min1 = Math.min(num, min1);
    }
    if (common !== Infinity) return common;
    const min2 = Math.min(...nums2);
    return min1 < min2 ? +`${min1}${min2}` : +`${min2}${min1}`;
}
