// 3162 - Find the Number of Good Pairs I

function numberOfPairs(nums1, nums2, k) {
    let res = 0;
    for (let i = 0; i < nums1.length; i++) {
        const cur = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            if (cur % (nums2[j] * k) === 0) res++;
        }
    }
    return res;
}
