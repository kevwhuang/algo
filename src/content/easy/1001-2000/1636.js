// 1636 - Sort Array by Increasing Frequency

function frequencySort(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
}
