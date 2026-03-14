// 2615 - Sum of Distances

function distance(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i]);
    }
    for (const num of map.keys()) {
        const indices = map.get(num), len = indices.length;
        let leftSum = 0, rightSum = indices.reduce((s, e) => s + e);
        for (let i = 0; i < len; i++) {
            const idx = indices[i];
            rightSum -= idx;
            nums[idx] = idx * (i + i + 1 - len) + rightSum - leftSum;
            leftSum += idx;
        }
    }
    return nums;
}
