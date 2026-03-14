// 1558 - Minimum Numbers of Function Calls to Make Target Array

function minOperations(nums) {
    let adds = 0, mults = 0;
    for (let i = 0, cur, localMults; i < nums.length; i++) {
        cur = nums[i], localMults = 0;
        while (cur) {
            if (cur % 2) cur--, adds++;
            else cur >>= 1, localMults++;
        }
        mults = Math.max(localMults, mults);
    }
    return adds + mults;
}
