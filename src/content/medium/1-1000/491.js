// 491 - Non-Decreasing Subsequences

function findSubsequences(nums) {
    function backtrack(i) {
        if (cur.length >= 2) subsequences.push([...cur]);
        const seen = new Set();
        for (let j = i; j < nums.length; j++) {
            if (cur.length && nums[j] < cur[cur.length - 1]) continue;
            if (seen.has(nums[j])) continue;
            seen.add(nums[j]);
            cur.push(nums[j]);
            backtrack(j + 1);
            cur.pop();
        }
    }
    const subsequences = [], cur = [];
    backtrack(0);
    return subsequences;
}
