// 2598 - Smallest Missing Non-Negative Integer After Operations

function findSmallestInteger(nums, value) {
    const bucket = new Array(value).fill(0);
    for (let i = 0; i < nums.length; i++) {
        bucket[(nums[i] % value + value) % value]++;
    }
    let min = 0;
    for (let n = 1; n < value; n++) {
        if (bucket[n] < bucket[min]) min = n;
    }
    return min + bucket[min] * value;
}
