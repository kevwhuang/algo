// 503 - Next Greater Element II

function nextGreaterElements(nums) {
    const S = [], n = nums.length, nn = n + n;
    const res = new Int32Array(n);
    for (let i = 0; i < nn; i++) {
        const cur = nums[i % n];
        while (S.length && nums[S.at(-1)] < cur) res[S.pop()] = cur;
        if (i < n) S.push(i);
    }
    while (S.length) res[S.pop()] = -1;
    return res;
}
