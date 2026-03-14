// 2997 - Minimum Number of Operations to Make Array XOR Equal to K

function minOperations(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        k ^= nums[i];
    }
    let flips = 0;
    while (k) {
        if (k & 1) flips++;
        k >>= 1;
    }
    return flips;
}
