// 1818 - Minimum Absolute Sum Difference

function minAbsoluteSumDiff(nums1, nums2) {
    function update(i) {
        if (i === -1 || i === len) return;
        const cur = Math.abs(sorted[i] - tgt);
        if (cur >= abs) return;
        max = Math.max(Math.abs(cur - abs), max);
    }
    let sum = 0, max = 0, tgt, abs;
    const sorted = [...nums1].sort((a, b) => a - b);
    const len = nums1.length;
    for (let i = 0; i < len; i++) {
        tgt = nums2[i];
        abs = Math.abs(nums1[i] - tgt);
        sum += abs;
        let l = 0, r = len - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (sorted[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        update(r);
        update(r + 1);
    }
    return (sum - max) % 1000000007;
}
