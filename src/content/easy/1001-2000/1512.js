// 1512 - Number of Good Pairs

function numIdenticalPairs(nums) {
    let res = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 0);
        res += map.get(nums[i]);
    }
    return res;
}
