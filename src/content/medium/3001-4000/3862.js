// 3862 - Find the Smallest Balanced Index

function smallestBalancedIndex(nums) {
    let res = -1, acc1 = nums.reduce((s, e) => s + e), acc2 = 1;
    for (let i = nums.length - 1; acc1 > acc2 && ~i; i--) {
        acc1 -= nums[i];
        if (acc1 === acc2) res = i;
        acc2 *= nums[i];
    }
    return res;
}
