// 2967 - Minimum Cost to Make Array Equalindromic

function minimumCost(nums) {
    function find(d) {
        let num = median;
        while (true) {
            let rvs = 0, cur = num;
            while (cur) {
                rvs = 10 * rvs + cur % 10;
                cur = cur / 10 >> 0;
            }
            if (num === rvs) return num;
            num += d;
        }
    }
    nums = new Uint32Array(nums).sort();
    const median = nums[nums.length >> 1];
    const left = find(-1), right = find(1);
    let costL = 0, costR = 0;
    for (let i = 0; i < nums.length; i++) {
        costL += Math.abs(left - nums[i]);
        costR += Math.abs(right - nums[i]);
    }
    return Math.min(costL, costR);
}
