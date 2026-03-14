// 3843 - First Element With Unique Frequency

function firstUniqueFreq(nums) {
    const B1 = new Map(), B2 = new Map();
    nums.forEach(e => B1.set(e, (B1.get(e) ?? 0) + 1));
    B1.forEach(e => B2.set(e, (B2.get(e) ?? 0) + 1));
    for (const e of B2.values()) {
        if (e === 1 && B2.set(0)) break;
    }
    if (!B2.has(0)) return -1;
    for (let i = 0; i < nums.length; i++) {
        if (B2.get(B1.get(nums[i])) === 1) return nums[i];
    }
}
