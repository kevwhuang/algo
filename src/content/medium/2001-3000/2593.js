// 2593 - Find Score of an Array After Marking All Elements

function findScore(nums) {
    const arr = new Array(nums.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [nums[i], i];
    }
    arr.sort((a, b) => a[0] - b[0]);
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        const index = arr[i][1];
        if (nums[index] === null) continue;
        nums[index] = null;
        if (index - 1 >= 0) nums[index - 1] = null;
        if (index + 1 < nums.length) nums[index + 1] = null;
        score += arr[i][0];
    }
    return score;
}
