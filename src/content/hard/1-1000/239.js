// 239 - Sliding Window Maximum

function maxSlidingWindow(nums, k) {
    const res = new Int16Array(nums.length - k + 1);
    const S = [0];
    for (let i = 0, j = 0; j < nums.length; j++) {
        if (S[i] <= j - k) i++;
        while (i < S.length && nums[S.at(-1)] <= nums[j]) S.pop();
        S.push(j);
        res[j - k + 1] = nums[S[i]];
    }
    return res;
}
