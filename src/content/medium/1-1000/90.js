// 90 - Subsets II

function subsetsWithDup(nums) {
    function backtrack(i) {
        res.push(new Int8Array(cur));
        for (let j = i; j < nums.length; j++) {
            if (j > i && nums[j - 1] === nums[j]) continue;
            cur.push(nums[j]);
            backtrack(j + 1);
            cur.pop();
        }
    }
    nums.sort((a, b) => a - b);
    const res = [], cur = [];
    backtrack(0);
    return res;
}
