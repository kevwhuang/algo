// 3936. Minimum Swaps to Move Zeros to End

function minimumSwaps(nums) {
    let res = nums.reduce((s, e) => s + (e === 0), 0);
    for (let i = nums.length - res; i < nums.length; i++) {
        if (nums[i] === 0) res--;
    }
    return res;
}
