// 2200 - Find All K-Distant Indices in an Array

function findKDistantIndices(nums, key, k) {
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== key) continue;
        const lower = Math.max(i - k, indices.at(-1) || 0);
        const upper = Math.min(i + k, nums.length - 1);
        for (let j = lower; j <= upper; j++) {
            if (j > (indices.at(-1) || -1)) indices.push(j);
        }
    }
    return indices;
}
