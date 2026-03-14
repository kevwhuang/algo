// 747 - Largest Number at Least Twice of Others

function dominantIndex(nums) {
    let index, largest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            index = i;
            largest = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === index) continue;
        if (largest < nums[i] * 2) return -1;
    }
    return index;
}
