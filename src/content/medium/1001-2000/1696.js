// 1696 - Jump Game VI

function maxResult(nums, k) {
    const Q = [0];
    for (let i = 1; i < nums.length; i++) {
        if (i - Q[0] > k) Q.shift();
        nums[i] += nums[Q[0]];
        while (Q.length && nums[Q.at(-1)] <= nums[i]) Q.pop();
        Q.push(i);
    }
    return nums.at(-1);
}
