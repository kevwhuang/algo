// 228 - Summary Ranges

function summaryRanges(nums) {
    if (nums.length === 0) return [];
    const res = [];
    let cur = nums[0], acc = 0, i = 0;
    while (++i < nums.length) {
        if (cur + acc + 1 === nums[i] && ++acc) continue;
        res.push(acc ? `${cur}->${cur + acc}` : String(cur));
        cur = nums[i], acc = 0;
    }
    res.push(acc ? `${cur}->${cur + acc}` : String(cur));
    return res;
}
