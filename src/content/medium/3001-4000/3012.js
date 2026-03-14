// 3012 - Minimize Length of Array Using Operations

function minimumArrayLength(nums) {
    let min = Infinity, count;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min) continue;
        if (nums[i] === min) count++;
        else min = nums[i], count = 1;
    }
    if (count === 1) return 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % min) return 1;
    }
    return Math.ceil(count / 2);
}
