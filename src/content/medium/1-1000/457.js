// 457 - Circular Array Loop

function circularArrayLoop(nums) {
    const len = nums.length;
    const seen = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        if (seen[i]) continue;
        seen[i] = 1;
        const set = new Set();
        const sign = Math.sign(nums[i]);
        let j = i;
        while (true) {
            const next = (nums[j] % len + j + len) % len;
            if (j === next) break;
            if (sign !== Math.sign(nums[next])) break;
            if (set.has(next)) return true;
            set.add(next);
            seen[next] = 1;
            j = next;
        }
    }
    return false;
}
