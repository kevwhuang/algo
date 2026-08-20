// 4013. Count Subarrays With Even Odd Ratio II

function countRatioSubarrays(nums, a, b) {
    function merge(l, r) {
        if (l === r) return;
        const m = l + r >> 1;
        merge(l, m);
        merge(m + 1, r);
        let i = l, j = m + 1, k = l;
        while (i <= m && j <= r) {
            if (pre[i] < pre[j]) A[k++] = pre[i++];
            else res += m - i + 1, A[k++] = pre[j++];
        }
        while (i <= m) A[k++] = pre[i++];
        while (j <= r) A[k++] = pre[j++];
        while (l <= r) pre[l] = A[l++];
    }
    if (!this.A) A = new Array(100001);
    if (!this.pre) pre = new Array(100001).fill(0, 0, 1);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + (nums[i] % 2 ? -a : b);
    }
    let res = 0;
    merge(0, n);
    return res;
}
