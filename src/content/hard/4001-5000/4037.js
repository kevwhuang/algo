// 4037. Maximum Valid Split Positions II

function maxValidSplits(nums) {
    function gcd(a, b) {
        let swap;
        while (b) swap = a % b, a = b, b = swap;
        return a;
    }
    const n = nums.length, pre = new Uint32Array(n), suf = new Uint32Array(n);
    pre[0] = nums[0], suf[n - 1] = nums[n - 1];
    for (let i = 1; i < n; i++) {
        pre[i] = gcd(pre[i - 1], nums[i]);
    }
    for (let i = n - 2; ~i; i--) {
        suf[i] = gcd(suf[i + 1], nums[i]);
    }
    let res = 0;
    for (let i = 1; i < n; i++) {
        if (pre[i - 1] === suf[i]) res++;
    }
    for (let i = 0; i < n; i++) {
        if (i && pre[i - 1] === pre[i]) continue;
        const tgt = gcd(i ? pre[i - 1] : 0, i < n - 1 ? suf[i + 1] : 0);
        let left = 0, right = 0, l = -1, r = n;
        while (left !== tgt) if (++l !== i) left = gcd(left, nums[l]);
        while (right !== tgt) if (--r !== i) right = gcd(right, nums[r]);
        res = Math.max(r - l - (l < i && r > i), res);
    }
    return res;
}
