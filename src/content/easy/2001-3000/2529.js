// 2529 - Maximum Count of Positive Integer and Negative Integer

function maximumCount(nums) {
    function search(tgt) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums[m] < tgt) l = m + 1;
            else if (nums[m] > tgt) r = m - 1;
        }
        return l;
    }
    return Math.max(search(-.1), nums.length - search(.1));
}
