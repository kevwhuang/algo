// 985 - Sum of Even Numbers After Queries

function sumEvenAfterQueries(nums, queries) {
    let sum = nums.reduce((s, e) => s + (!(e & 1) ? e : 0), 0);
    const res = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const [val, index] = queries[i];
        if (!(nums[index] & 1)) sum -= nums[index];
        nums[index] += val;
        if (!(nums[index] & 1)) sum += nums[index];
        res[i] = sum;
    }
    return res;
}
