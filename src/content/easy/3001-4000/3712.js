// 3712 - Sum of Elements With Frequency Divisible by K

function sumDivisibleByK(nums, k) {
    const B = new Uint8Array(101);
    nums.forEach(e => B[e]++);
    return B.reduce((s, e, i) => s + (e % k ? 0 : e * i), 0);
}
