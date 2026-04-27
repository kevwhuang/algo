// 3912. Valid Elements in an Array

function findValidElements(nums) {
    const n = nums.length;
    const suf = new Uint8Array(n + 1);
    for (let i = n - 1; ~i; i--) {
        suf[i] = Math.max(nums[i], suf[i + 1]);
    }
    const res = [];
    for (let max = 0, i = 0; i < n; i++) {
        const cur = nums[i];
        if (cur > max || cur > suf[i + 1]) res.push(cur);
        max = Math.max(cur, max);
    }
    return res;
}
