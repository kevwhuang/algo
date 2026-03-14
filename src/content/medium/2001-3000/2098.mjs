// 2098 - Subsequence of Size K With the Largest Even Sum

function largestEvenSum(nums, k) {
    nums = new Uint32Array(nums).sort();
    let sum = 0, odd, even;
    const bound = nums.length - 1 - k;
    for (let i = nums.length - 1; i > bound; i--) {
        const num = nums[i];
        sum += num;
        if (num % 2) odd = num;
        else even = num;
    }
    if (sum % 2 === 0) return sum;
    let newOdd, newEven;
    for (let i = nums.length - 1 - k; ~i; i--) {
        const num = nums[i];
        if (num % 2 && newOdd === undefined) newOdd = num;
        else if (num % 2 === 0 && newEven === undefined) newEven = num;
        if (newOdd >= 0 && newEven >= 0) break;
    }
    const d1 = newOdd - even || -Infinity;
    const d2 = newEven - odd || -Infinity;
    const max = Math.max(d1, d2);
    return max === -Infinity ? -1 : sum + max;
}
