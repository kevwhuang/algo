// 2006 - Count Number of Pairs With Absolute Difference K

function countKDifference(nums, k) {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) pairs++;
        }
    }
    return pairs;
}
