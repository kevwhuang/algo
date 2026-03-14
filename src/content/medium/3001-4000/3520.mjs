// 3520 - Minimum Threshold for Inversion Pairs Count

function minThreshold(nums, k) {
    function merge(l, r) {
        if (l === r) return [nums[l]];
        const res = new Array(r - l + 1);
        const left = merge(l, l + r >> 1);
        const right = merge((l + r >> 1) + 1, r);
        const n = left.length, nn = right.length;
        let i = 0, j = 0, k = 0;
        while (i < n || j < nn) {
            if (i < n && j === nn || left[i] <= right[j]) {
                while (k < j && left[i] - right[k] > m) k++;
                res[i + j] = left[i++], acc += j - k;
            } else {
                res[i + j] = right[j++];
            }
        }
        return res;
    }
    const min = nums.reduce((s, e) => Math.min(e, s));
    const max = nums.reduce((s, e) => Math.max(e, s));
    let acc, m, l = 1, r = max - min;
    while (l <= r) {
        acc = 0, m = l + r >> 1;
        merge(0, nums.length - 1);
        if (acc < k) l = m + 1;
        else r = m - 1;
    }
    return l <= max - min ? l : -1;
}
