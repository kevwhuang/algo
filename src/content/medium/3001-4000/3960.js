// 3960. Frequency Balance Subarray

function getLength(nums) {
    const fn = nn => res = Math.max(nn, res);
    if (!this.B2) B2 = new Uint16Array(1001);
    let res = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        B2.fill(0, 0, n + 1);
        let acc = 0;
        const B1 = new Map();
        for (let j = i; j < n; j++) {
            const next = (B1.get(nums[j]) ?? 0) + 1;
            B1.set(nums[j], next);
            if (B2[next - 1]-- === 1) acc--;
            if (B2[next]++ === 0) acc++;
            if (acc === 1 && B1.size === 1) fn(j - i);
            else if (acc === 2 && next <= 500 && B2[2 * next]) fn(j - i);
            else if (acc === 2 && next % 2 === 0 && B2[next / 2]) fn(j - i);
        }
    }
    return res + 1;
}
