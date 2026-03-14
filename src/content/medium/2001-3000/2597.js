// 2597 - The Number of Beautiful Subsets

function beautifulSubsets(nums, k) {
    function backtrack(i) {
        if (i === nums.length) return subsets++;
        backtrack(i + 1);
        const num = nums[i] + k;
        if (arr[num - k] || arr[num + k]) return;
        arr[num]++;
        backtrack(i + 1);
        arr[num]--;
    }
    let subsets = -1;
    const arr = new Uint8Array(Math.max(...nums) + k + k + 1);
    backtrack(0);
    return subsets;
}
