// 2176 - Count Equal and Divisible Pairs in an Array

function countPairs(nums, k) {
    let pairs = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i * j % k === 0) pairs++;
        }
    }
    return pairs;
}
