// 2735 - Collecting Chocolates

function minCost(nums, x) {
    let min = Infinity;
    const arr = [...nums], len = nums.length;
    for (let r = 0; r < len; r++) {
        let cost = r * x;
        for (let i = 0; i < len; i++) {
            const j = (i + r) % len;
            if (nums[i] < arr[j]) arr[j] = nums[i];
            cost += arr[j];
        }
        if (cost < min) min = cost;
    }
    return min;
}
