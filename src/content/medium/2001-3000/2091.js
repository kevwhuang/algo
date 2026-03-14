// 2091 - Removing Minimum and Maximum From Array

function minimumDeletions(nums) {
    const pos = [], len = nums.length;
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < len; i++) {
        if (nums[i] < min) {
            min = nums[i];
            pos[0] = i;
        }
        if (nums[i] > max) {
            max = nums[i];
            pos[1] = i;
        }
    }
    if (pos[0] > pos[1]) [pos[0], pos[1]] = [pos[1], pos[0]];
    return Math.min(pos[1] + 1, len - pos[0], pos[0] - pos[1] + len + 1);
}
