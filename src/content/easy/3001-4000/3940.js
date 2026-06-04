// 3940. Limit Occurrences in Sorted Array

function limitOccurrences(nums, k) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const tgt = nums[i];
        res.push(tgt);
        let acc = k;
        while (i + 1 < nums.length && nums[i + 1] === tgt) {
            if (++i && --acc > 0) res.push(tgt);
        }
    }
    return res;
}
