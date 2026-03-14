// 3028 - Ant on the Boundary

function returnToBoundaryCount(nums) {
    let res = 0, idx = 0;
    for (let i = 0; i < nums.length; i++) {
        idx += nums[i];
        if (idx === 0) res++;
    }
    return res;
}
