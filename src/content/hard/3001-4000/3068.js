// 3068 - Find the Maximum Sum of Node Values

function maximumValueSum(nums, k, edges) {
    let res = 0, acc = 0, min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i], xor = a ^ k;
        res += Math.max(xor, a);
        acc += xor > a;
        min = Math.min(Math.abs(xor - a), min);
    }
    return acc % 2 ? res - min : res;
}
