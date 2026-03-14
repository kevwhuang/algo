// 760 - Find Anagram Mappings

function anagramMappings(nums1, nums2) {
    const indexes = {};
    for (let i = 0; i < nums2.length; i++) {
        if (indexes[nums2[i]]) indexes[nums2[i]].push(i);
        else indexes[nums2[i]] = [i];
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = indexes[nums1[i]].shift();
    }
    return nums1;
}
