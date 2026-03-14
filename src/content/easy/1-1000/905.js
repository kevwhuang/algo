// 905 - Sort Array by Parity

function sortArrayByParity(nums) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if (nums[l] % 2) {
            nums.push(nums[l]);
            nums.splice(l, 1);
            r--;
        } else l++;
    }
    return nums;
}
