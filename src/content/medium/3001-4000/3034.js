// 3034 - Number of Subarrays That Match a Pattern I

function countMatchingSubarrays(nums, pattern) {
    const m = pattern.length, n = nums.length;
    const lps = new Uint32Array(m);
    let l = 0, r = 1;
    while (r < m) {
        if (pattern[l] === pattern[r]) lps[r++] = ++l;
        else if (l) l = lps[l - 1];
        else r++;
    }
    let res = 0, i = 1, j = 0;
    while (i < n) {
        const a = nums[i - 1], b = nums[i], c = pattern[j];
        if ((a < b && c > 0) || (a === b && !c) || (a > b && c < 0)) {
            if (++i && ++j === m && ++res) j = lps[j - 1];
        }
        else if (j) j = lps[j - 1];
        else i++;
    }
    return res;
}
