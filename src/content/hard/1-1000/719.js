// 719 - Find Kth Smallest Pair Distance

function smallestDistancePair(nums, k) {
    nums = new Uint32Array(nums).sort();
    let l = 0, r = nums.at(-1) - nums[0];
    while (l < r) {
        let acc = 0;
        const m = l + r >> 1;
        for (let ll = 0, rr = 0; rr < nums.length; rr++) {
            while (nums[ll] + m < nums[rr]) ll++;
            acc += rr - ll;
        }
        if (acc < k) l = m + 1;
        else r = m;
    }
    return l;
}
