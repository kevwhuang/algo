// 2150 - Find All Lonely Numbers in the Array

function findLonely(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    const res = [];
    for (const num of map.keys()) {
        if (map.get(num) !== 1) continue;
        if (!map.has(num - 1) && !map.has(num + 1)) res.push(num);
    }
    return res;
}
