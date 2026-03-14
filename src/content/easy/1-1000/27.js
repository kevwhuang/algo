// 27 - Remove Element

function removeElement(nums, val) {
    let l = 0, r = 0;
    const n = nums.length;
    while (true) {
        while (r < n && nums[r] === val) r++;
        if (r === n) break;
        nums[l++] = nums[r++];
    }
    return l;
}
