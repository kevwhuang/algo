// 532 - K-Diff Pairs in an Array

function findPairs(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    let pairs = 0;
    if (k) {
        for (const num of map.keys()) {
            if (map.has(num + k)) pairs++;
        }
    } else {
        for (const num of map.keys()) {
            if (map.get(num) >= 2) pairs++;
        }
    }
    return pairs;
}
