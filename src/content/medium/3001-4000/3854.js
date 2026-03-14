// 3854 - Minimum Operations to Make Array Parity Alternating

function makeParityAlternating(nums) {
    function fn(mod) {
        let acc = 0, min = Infinity, max = -Infinity;
        for (let i = 0; i < nums.length; mod = (mod + 1) % 2, i++) {
            let cur = nums[i];
            if (Math.abs(cur) % 2 === mod) acc++, cur += cur < tgt ? 1 : -1;
            min = Math.min(cur, min), max = Math.max(cur, max);
        }
        return [acc, max - min];
    }
    const tgt = nums.reduce((s, e) => s + e) / nums.length;
    const [acc1, d1] = fn(0), [acc2, d2] = fn(1);
    if (acc1 === acc2) return [acc1, Math.min(d1, d2)];
    return acc1 < acc2 ? [acc1, d1] : [acc2, d2];
}
