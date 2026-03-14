// 2859 - Sum of Values at Indices With K Set Bits

function sumIndicesWithKSetBits(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = i, local = 0;
        while (cur) {
            if (cur & 1) local++;
            cur >>= 1;
        }
        if (local === k) sum += nums[i];
    }
    return sum;
}
