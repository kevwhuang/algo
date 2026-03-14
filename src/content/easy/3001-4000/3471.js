// 3471 - Find the Largest Almost Missing Integer

function largestInteger(nums, k) {
    const max = nums.reduce((s, e) => Math.max(e, s));
    if (k === nums.length) return max;
    const B = new Uint8Array(max + 1);
    nums.forEach(e => B[e]++);
    if (k === 1) return B.reduce((s, e, i) => e === 1 ? i : s, -1);
    const a = nums[0], b = nums.at(-1);
    if (B[a] === 1 && B[b] === 1) return Math.max(a, b);
    return B[a] === 1 ? a : B[b] === 1 ? b : -1;
}
