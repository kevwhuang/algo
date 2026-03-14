// 283 - Move Zeros

function moveZeroes(nums) {
    let acc = 0;
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r]) nums[l++] = nums[r];
        else acc++;
    }
    for (let i = nums.length - acc; i < nums.length; i++) {
        nums[i] = 0;
    }
}
