// 2317 - Maximum XOR After Operations

function maximumXOR(nums) {
    let or = 0;
    for (let i = 0; i < nums.length; i++) {
        or |= nums[i];
    }
    return or;
}
