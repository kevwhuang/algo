// 3101 - Count Alternating Subarrays

function countAlternatingSubarrays(nums) {
    let subarrays = 0, i = 0;
    while (i < nums.length) {
        let j = i + 1;
        while (j < nums.length && nums[j - 1] !== nums[j]) j++;
        subarrays += ((j - i) ** 2 + j - i) / 2;
        i = j;
    }
    return subarrays;
}
