// 3676 - Count Bowl Subarrays

function bowlSubarrays(nums) {
    let res = 0, i = -1;
    const S = [];
    while (++i < nums.length) {
        while (S.length && S.at(-1) < nums[i]) if (S.pop() && S.length) res++;
        S.push(nums[i]);
    }
    return res;
}
