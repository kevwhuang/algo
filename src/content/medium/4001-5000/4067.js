// 4067. Longest Subarray With Restricted Pair Sums

function maxSubarray(nums) {
    let res = 0;
    const B = new Uint16Array(1001);
    for (let l = 0, r = 0; r < nums.length; r++) {
        const a = nums[r];
        B[a]++;
        while (true) {
            let flag = true;
            for (let b = 1; flag && b < 501; b++) {
                if (a === b && B[b] === 1 || B[b] === 0) continue;
                const c = a - b;
                if (B[a + b]) flag = false;
                else if (c > 0 && b !== c && B[c]) flag = false;
                else if (c > 0 && b === c && B[c] > 1) flag = false;
            }
            if (flag) break;
            B[nums[l++]]--;
        }
        res = Math.max(r - l, res);
    }
    return res + 1;
}
