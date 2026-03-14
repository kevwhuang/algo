// 2155 - All Divisions With the Highest Score of a Binary Array

function maxScoreIndices(nums) {
    let l = 0, r = nums.reduce((s, e) => s + e);
    let indices = [0], max = l + r;
    for (let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? l++ : r--;
        if (l + r === max) {
            indices.push(i + 1);
        } else if (l + r > max) {
            indices = [i + 1];
            max = l + r;
        }
    }
    return indices;
}
