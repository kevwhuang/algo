// 3224 - Minimum Array Changes to Make Differences Equal

function minChanges(nums, k) {
    const arr = new Array(k + 2).fill(0);
    arr[0] = nums.length / 2;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        const a = Math.min(nums[i], nums[j]);
        const b = Math.max(nums[i], nums[j]);
        arr[b - a]--;
        arr[b - a + 1]++;
        arr[Math.max(k - a, b) + 1]++;
    }
    let min = Infinity, acc = 0;
    for (let i = 0; i <= k; i++) {
        acc += arr[i];
        if (acc < min) min = acc;
    }
    return min;
}
