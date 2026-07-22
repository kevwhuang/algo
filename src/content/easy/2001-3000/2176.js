// 2176. Count Equal and Divisible Pairs in an Array

function countPairs(nums, k) {
    let res = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            res += i * j % k === 0 && nums[i] === nums[j];
        }
    }
    return res;
}
