// 1133 - Largest Unique Number

function largestUniqueNumber(nums) {
    const B = new Map();
    nums.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    let max = -1;
    for (const e of B) {
        if (e[1] === 1) max = Math.max(e[0], max);
    }
    return max;
}
