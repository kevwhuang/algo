// 4066. Maximum Equal Adjacent Pairs After at Most One Replacement

function maxEqualAdjacentPairs(nums) {
    let acc = 0, max = 0;
    const B = new Map();
    for (let i = 1; i < nums.length; i++) {
        const a = nums[i - 1], b = nums[i];
        if (a === b && ++acc) continue;
        const key = `${Math.min(a, b)},${Math.max(a, b)}`;
        B.set(key, (B.get(key) ?? 0) + 1);
        max = Math.max(B.get(key), max);
    }
    return acc + max;
}
