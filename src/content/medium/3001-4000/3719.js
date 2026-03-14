// 3719 - Longest Balanced Subarray I

function longestBalanced(nums) {
    if (!this.seen) seen = new Uint16Array(100001);
    seen.fill(2000, 0, Math.max(...nums) + 1);
    let res = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let acc1 = 0, acc2 = 0;
        for (let j = i; j < n; j++) {
            const cur = nums[j], d = j - i + 1;
            if (seen[cur] !== i) seen[cur] = i, nums[j] % 2 ? acc1++ : acc2++;
            if (d > res && acc1 === acc2) res = d;
        }
    }
    return res;
}
