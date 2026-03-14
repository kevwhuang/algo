// 2425 - Bitwise XOR of All Pairings

function xorAllNums(nums1, nums2) {
    if (nums1.length % 2) {
        const xor = nums2.reduce((s, e) => s ^ e);
        return nums2.length % 2 ? xor ^ nums1.reduce((s, e) => s ^ e) : xor;
    }
    return nums2.length % 2 ? nums1.reduce((s, e) => s ^ e) : 0;
}
