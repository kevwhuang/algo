// 3080 - Mark Elements on Array by Performing Queries

function unmarkedSumArray(nums, queries) {
    let sum = 0;
    const arr = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = [nums[i], i];
        arr[i] = nums[i];
    }
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 0, j = -1; i < queries.length; i++) {
        const idx = queries[i][0];
        if (nums[idx][1] !== true) {
            nums[idx][1] = true;
            sum -= nums[idx][0];
        }
        let rem = queries[i][1];
        while (rem && ++j < arr.length) {
            if (arr[j][1] === true) continue;
            arr[j][1] = true;
            sum -= arr[j][0];
            rem--;
        }
        queries[i] = sum;
    }
    return queries;
}
