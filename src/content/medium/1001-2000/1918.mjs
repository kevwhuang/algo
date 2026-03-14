// 1918 - Kth Smallest Subarray Sum

function kthSmallestSubarraySum(nums, k) {
    let l = 1, r = 1e9;
    while (l < r) {
        const m = l + r >> 1;
        let count = 0, acc = 0, ll = 0, rr = 0;
        while (rr < nums.length) {
            if (acc + nums[rr] > m) acc -= nums[ll++];
            else acc += nums[rr++], count += rr - ll;
        }
        if (count < k) l = m + 1;
        else r = m;
    }
    return r;
}
