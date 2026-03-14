// 3318 - Find X-Sum of All K-Long Subarrays I

function findXSum(nums, k, x) {
    const res = new Uint16Array(nums.length - k + 1);
    const map = new Map();
    for (let l = 0, r = 0; r < nums.length; r++) {
        map.set(nums[r], (map.get(nums[r]) ?? 0) + 1);
        if (r < k - 1) continue;
        const arr = [...map].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
        const min = Math.min(x, arr.length);
        let i = 0;
        while (i < min) res[l] += arr[i][0] * arr[i++][1];
        const f = map.get(nums[l]) - 1;
        f ? map.set(nums[l++], f) : map.delete(nums[l++]);
    }
    return res;
}
