// 525 - Contiguous Array

function findMaxLength(nums) {
    let max = 0, count = 0;
    const map = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] ? 1 : -1;
        if (map.has(count)) max = Math.max(i - map.get(count), max);
        else map.set(count, i);
    }
    return max;
}
