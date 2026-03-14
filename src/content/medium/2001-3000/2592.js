// 2592 - Maximize Greatness of an Array

function maximizeGreatness(nums) {
    nums = new Uint32Array(nums).sort();
    let l = 0, r = 1;
    while (r < nums.length) {
        if (nums[l] >= nums[r++]) continue;
        l++;
    }
    return l;
}
