// 1577 - Number of Ways Where Square of Number Is Equal to Product of Two Numbers

function numTriplets(nums1, nums2) {
    function count(nums1, nums2) {
        const map = new Map();
        for (let i = 0; i < nums1.length; i++) {
            const sq = nums1[i] ** 2;
            map.set(sq, (map.get(sq) ?? 0) + 1);
        }
        let triplets = 0;
        const len = nums2.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                triplets += map.get(nums2[i] * nums2[j]) ?? 0;
            }
        }
        return triplets;
    }
    return count(nums1, nums2) + count(nums2, nums1);
}
