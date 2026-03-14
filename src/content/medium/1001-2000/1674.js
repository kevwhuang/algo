// 1674 - Minimum Moves to Make Array Complementary

function minMoves(nums, limit) {
    const arr = new Int16Array(2 * limit + 1);
    const len = nums.length;
    for (let i = len / 2, j = i - 1; i < len; i++, j--) {
        const a = Math.min(nums[i], nums[j]);
        const b = Math.max(nums[i], nums[j]);
        arr[a + b + 1]++, arr[b + limit + 1]++;
        arr[a + 1]--, arr[a + b]--;
    }
    let min = len, acc = len;
    for (let i = 1; i < arr.length; i++) {
        acc += arr[i];
        if (acc < min) min = acc;
    }
    return min;
}
