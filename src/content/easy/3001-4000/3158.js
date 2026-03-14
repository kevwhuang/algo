// 3158 - Find the XOR of Numbers Which Appear Twice

function duplicateNumbersXOR(nums) {
    const bucket = new Uint8Array(51);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    let xor = 0;
    for (let n = 1; n <= 50; n++) {
        if (bucket[n] === 2) xor ^= n;
    }
    return xor;
}
