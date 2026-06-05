// 3944. Minimum Operations to Make Array Modulo Alternating II

function minOperations(nums, k) {
    function check(i) {
        B.fill(0, 0, k);
        while (i < nums.length) B[nums[i] % k]++, i += 2;
        const left = k >> 1, right = k - 1 >> 1;
        let acc1 = 0, acc2 = 0, acc3 = 0, acc4 = 0, l = 0, r = 0;
        while (++l <= left) acc1 += l * B[k - l], acc2 += B[k - l];
        while (++r <= right) acc3 += r * B[r], acc4 += B[r];
        let a = acc1 + acc3, b = Infinity, j = 0;
        for (let ii = 0; ii < k - 1; ii++) {
            acc1 += B[ii] + acc2 - (left + 1) * B[(ii - left + k) % k];
            acc2 += B[ii] - B[(ii - left + k) % k];
            acc3 += right * B[(ii + right + 1) % k] - acc4;
            acc4 += B[(ii + right + 1) % k] - B[(ii + 1) % k];
            const sum = acc1 + acc3;
            if (sum < a) b = a, a = sum, j = ii + 1;
            else b = Math.min(sum, b);
        }
        return [a, b, j];
    }
    if (!this.B) B = new Uint32Array(1e5);
    const [a, b, i] = check(0), [c, d, j] = check(1);
    return i === j ? Math.min(a + d, b + c) : a + c;
}
