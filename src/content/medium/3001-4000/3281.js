// 3281 - Maximize Score of Numbers in Ranges

function maxPossibleScore(start, d) {
    const nums = new Uint32Array(start).sort();
    let l = 0, r = nums.at(-1) - nums[0] + d;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        let prev = nums[0], i = 0;
        while (++i < nums.length) {
            if (prev + m < nums[i]) prev = nums[i];
            else if (prev + m <= nums[i] + d) prev += m;
            else i = Infinity;
        }
        if (i < Infinity) l = m + 1;
        else r = m - 1;
    }
    return l - 1;
}
