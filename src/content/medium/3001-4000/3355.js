// 3355 - Zero Array Transformation I

function isZeroArray(nums, queries) {
    const arr = new Int32Array(nums.length + 1);
    for (let i = 0; i < queries.length; i++) {
        arr[queries[i][0]]++;
        arr[queries[i][1] + 1]--;
    }
    for (let acc = 0, i = 0; i < nums.length; i++) {
        acc += arr[i];
        if (nums[i] > acc) return false;
    }
    return true;
}
