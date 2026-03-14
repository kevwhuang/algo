// 3356 - Zero Array Transformation II

function minZeroArray(nums, queries) {
    let acc = 0, i = -1, j = -1;
    const arr = new Int32Array(nums.length + 1);
    while (++i < nums.length) {
        acc += arr[i];
        while (nums[i] > acc) {
            if (++j === queries.length) return -1;
            if (queries[j][1] < i) continue;
            if (queries[j][0] <= i) acc += queries[j][2];
            else arr[queries[j][0]] += queries[j][2];
            arr[queries[j][1] + 1] -= queries[j][2];
        }
    }
    return j + 1;
}
