// 1630 - Arithmetic Subarrays

function checkArithmeticSubarrays(nums, l, r) {
    const res = [];
    loop: for (let i = 0; i < l.length; i++) {
        const cur = nums.slice(l[i], r[i] + 1);
        cur.sort((a, b) => a - b);
        const diff = cur[1] - cur[0];
        for (let j = 2; j < cur.length; j++) {
            if (cur[j] - cur[j - 1] !== diff) {
                res.push(false);
                continue loop;
            }
        }
        res.push(true);
    }
    return res;
}
