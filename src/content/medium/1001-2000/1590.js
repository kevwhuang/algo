// 1590 - Make Sum Divisible by P

function minSubarray(nums, p) {
    let min = Infinity, acc = 0;
    const rem = nums.reduce((s, e) => s + e) % p;
    const map = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
        acc = (acc + nums[i]) % p;
        map.set(acc, i);
        const diff = (acc - rem + p) % p;
        if (!map.has(diff)) continue;
        min = Math.min(i - map.get(diff), min);
    }
    return min === nums.length ? -1 : min;
}
