// 2389 - Longest Subsequence With Limited Sum

function answerQueries(nums, queries) {
    nums = new Uint32Array(nums).sort();
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    for (let i = 0; i < queries.length; i++) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums[m] <= queries[i]) l = m + 1;
            else r = m - 1;
        }
        queries[i] = l;
    }
    return queries;
}
