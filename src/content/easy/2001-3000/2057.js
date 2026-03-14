// 2057 - Smallest Index With Equal Value

function smallestEqual(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
}
