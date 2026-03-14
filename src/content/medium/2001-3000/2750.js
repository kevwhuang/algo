// 2750 - Ways to Split Array Into Good Subarrays

function numberOfGoodSubarraySplits(nums) {
    let res = 1, prev = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        if (prev !== null) res = res * (i - prev) % 1000000007;
        prev = i;
    }
    return prev === null ? 0 : res;
}
