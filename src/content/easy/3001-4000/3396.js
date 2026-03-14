// 3396 - Minimum Number of Operations to Make Elements in Array Distinct

function minimumOperations(nums) {
    let res = 0, acc = 0, i = 0;
    const B = new Uint8Array(101);
    nums.forEach(e => ++B[e] === 2 && ++acc);
    while (acc && ++res) {
        if (--B[nums[i]] === 1) --acc;
        if (++i === nums.length) break;
        if (--B[nums[i]] === 1) --acc;
        if (++i === nums.length) break;
        if (--B[nums[i]] === 1) --acc;
        if (++i === nums.length) break;
    }
    return res;
}
