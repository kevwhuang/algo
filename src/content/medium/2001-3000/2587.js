// 2587 - Rearrange Array to Maximize Prefix Score

function maxScore(nums) {
    let arr = [], acc = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) arr.push(nums[i]);
        else acc += nums[i];
    }
    arr = new Int32Array(arr).sort();
    let score = nums.length - arr.length;
    for (let i = arr.length - 1; ~i; i--) {
        if ((acc += arr[i]) <= 0) break;
        score++;
    }
    return score;
}
