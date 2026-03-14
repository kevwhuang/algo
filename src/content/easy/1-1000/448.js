// 448 - Find All Numbers Disappeared in an Array

function findDisappearedNumbers(nums) {
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]) - 1;
        nums[abs] = -Math.abs(nums[abs]);
    }
    let l = 0, r = -1;
    while (++r < nums.length) {
        if (nums[r] > 0) nums[l++] = r + 1;
    }
    return nums.slice(0, l);
}
