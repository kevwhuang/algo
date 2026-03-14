// 1887 - Reduction Operations to Make the Array Elements Equal

function reductionOperations(nums) {
    const freqs = new Array(50001).fill(0);
    for (let i = 0; i < nums.length; i++) {
        freqs[nums[i]]++;
    }
    let ops = 0, inc = 0;
    for (let i = 0; i < freqs.length; i++) {
        if (freqs[i] === 0) continue;
        ops += freqs[i] * inc++;
    }
    return ops;
}
