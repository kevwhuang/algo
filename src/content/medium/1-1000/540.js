// 540 - Single Element in a Sorted Array

function singleNonDuplicate(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    return xor;
}
