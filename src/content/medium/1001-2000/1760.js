// 1760 - Minimum Limit of Balls in a Bag

function minimumSize(nums, maxOperations) {
    let l = 1, r = 1e9;
    while (l <= r) {
        const m = l + r >> 1;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            count += (nums[i] - 1) / m >> 0;
        }
        if (count > maxOperations) l = m + 1;
        else r = m - 1;
    }
    return l;
}
