// 3020 - Find the Maximum Number of Elements in Subset

function maximumLength(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    let max = 1;
    if (map.has(1)) {
        const count = map.get(1);
        map.delete(1);
        max = Math.max(count % 2 ? count : count - 1, max);
    }
    for (let num of map.keys()) {
        if (map.get(num) === 1) continue;
        num *= num;
        let count = 2, flag = false;
        while (map.has(num)) {
            if (map.get(num) === 1) count++, flag = true;
            if (map.get(num) === 1) break;
            count += 2, num *= num;
        }
        max = Math.max(count - !flag, max);
    }
    return max;
}
