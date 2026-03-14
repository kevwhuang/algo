// 1856 - Maximum Subarray Min-Product

function maxSumMinProduct(nums) {
    const ps = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        ps[i + 1] = ps[i] + nums[i];
    }
    nums.push(0);
    let max = 0n;
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack.at(-1)] > nums[i]) {
            const min = BigInt(nums[stack.pop()]);
            const sum = BigInt(ps[i] - ps[stack.at(-1) + 1 || 0]);
            const prod = min * sum;
            if (prod > max) max = prod;
        }
        stack.push(i);
    }
    return Number(max % 1000000007n);
}
