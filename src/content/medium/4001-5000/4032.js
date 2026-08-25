// 4032. Longest Subarray With at Most K Distinct Prime Factors

function longestSubarray(nums, k) {
    function check(cur, tgt, d) {
        if (cur % 2 === 0) {
            while (cur % 2 === 0) cur /= 2;
            if (B[2] === tgt) acc += d;
            B[2] += d;
        }
        if (cur % 3 === 0) {
            while (cur % 3 === 0) cur /= 3;
            if (B[3] === tgt) acc += d;
            B[3] += d;
        }
        let div = 5, dd = 2;
        const sqrt = cur ** 0.5;
        while (div <= sqrt) {
            if (cur % div === 0) {
                while (cur % div === 0) cur /= div;
                if (B[div] === tgt) acc += d;
                B[div] += d;
            }
            div += dd, dd ^= 6;
        }
        if (cur > 1) {
            if (B[cur] === tgt) acc += d;
            B[cur] += d;
        }
    }
    if (!this.B) B = new Uint32Array(99992);
    B.fill(0);
    let res = 0, acc = 0;
    for (let l = 0, r = 0; r < nums.length; r++) {
        check(nums[r], 0, 1);
        while (acc > k) check(nums[l++], 1, -1);
        res = Math.max(r - l + 1, res);
    }
    return res;
}
