// 3872. Longest Arithmetic Sequence After Changing at Most One Element

function longestArithmetic(nums) {
    let res = 3, a, b, c, i = 0;
    const max = Math.max, n = nums.length - 1;
    while (i < n) {
        let acc = 1;
        const d = nums[i + 1] - nums[i];
        while (i < n && nums[i] + d === nums[i + 1]) acc++, i++;
        if (i - acc >= 1 && nums[i - acc - 1] + d + d === nums[i - acc + 1]) {
            if (a && a[0] === d && b[1] === 2) res = max(a[1] + acc + 1, res);
            else res = max(acc + 2, res);
        } else if (i + 1 < n && nums[i] + d + d === nums[i + 2]) {
            res = max(acc + 2, res);
        }
        res = max(acc + 1, res), a = b, b = c, c = [d, acc];
    }
    return Math.min(res, n + 1);
}
