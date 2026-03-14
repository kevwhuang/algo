// 3095 - Shortest Subarray With OR at Least K I

function minimumSubarrayLength(nums, k) {
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let or = 0;
        for (let j = i; j < len; j++) {
            or |= nums[j];
            if (or < k) continue;
            min = Math.min(j - i + 1, min);
            break;
        }
    }
    return min === Infinity ? -1 : min;
}
