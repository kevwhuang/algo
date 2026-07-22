// 3984. Divisible Game

function divisibleGame(nums) {
    const set = new Set();
    for (const e of new Set(nums)) {
        const sqrt = e ** 0.5;
        for (let a = 1; a <= sqrt; a++) {
            if (e % a === 0) set.add(a).add(e / a);
        }
    }
    if (set.size === 1) return 1e9 + 5;
    set.delete(1);
    let max1 = -Infinity, k;
    for (const e of set) {
        let max2 = 0, acc = 0;
        for (let i = 0; i < nums.length; i++) {
            const cur = nums[i] % e ? -nums[i] : nums[i];
            acc = Math.max(cur, acc + cur);
            max2 = Math.max(acc, max2);
        }
        if (max2 === max1 && e < k) k = e;
        else if (max2 > max1) max1 = max2, k = e;
    }
    return Number(BigInt(max1) * BigInt(k) % BigInt(1e9 + 7));
}
