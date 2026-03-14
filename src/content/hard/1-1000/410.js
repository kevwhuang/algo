// 410 - Split Array Largest Sum

function splitArray(nums, k) {
    let l = Math.max(...nums), r = nums.length * l / k;
    while (l < r) {
        let acc1 = 0, acc2 = 1;
        const m = l + r >> 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] + acc1 > m && acc2++) acc1 = 0;
            acc1 += nums[i];
        }
        if (acc2 > k) l = m + 1;
        else r = m;
    }
    return r;
}
