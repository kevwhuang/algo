// 2442 - Count Number of Distinct Integers After Reverse Operations

function countDistinctIntegers(nums) {
    const set = new Set();
    for (let i = 0, cur, rvs; i < nums.length; i++) {
        cur = nums[i];
        rvs = 0;
        while (cur) {
            rvs = rvs * 10 + cur % 10;
            cur = ~~(cur / 10);
        }
        set.add(nums[i]).add(rvs);
    }
    return set.size;
}
