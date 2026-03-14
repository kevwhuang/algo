// 2343 - Query Kth Smallest Trimmed Number

function smallestTrimmedNumbers(nums, queries) {
    const len = nums.length;
    const mat = new Array(len);
    const arr = new Array(len);
    let j = nums[0].length, k = 0;
    while (~--j) {
        const bucket = new Array(10).fill(0);
        for (let i = 0; i < len; i++) {
            bucket[nums[i][j]]++;
        }
        for (let i = 1; i < 10; i++) {
            bucket[i] += bucket[i - 1];
        }
        const indices = [];
        for (let i = len - 1; ~i; i--) {
            const idx = --bucket[nums[i][j]];
            indices[idx] = k ? mat[k - 1][i] : i;
            arr[idx] = nums[i];
        }
        mat[k++] = indices;
        for (let i = 0; i < len; i++) {
            nums[i] = arr[i];
        }
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = mat[queries[i][1] - 1][queries[i][0] - 1];
    }
    return queries;
}
