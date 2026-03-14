// 454 - 4Sum II

function fourSumCount(nums1, nums2, nums3, nums4) {
    const len = nums1.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            const sum = nums1[i] + nums2[j];
            map.set(sum, map.get(sum) + 1 || 1);
        }
    }
    let tuples = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            tuples += map.get(-nums3[i] - nums4[j]) ?? 0;
        }
    }
    return tuples;
}
