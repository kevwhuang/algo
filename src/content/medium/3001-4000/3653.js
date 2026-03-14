// 3653 - XOR After Range Multiplication Queries I

function xorAfterQueries(nums, queries) {
    for (let i = 0; i < queries.length; i++) {
        const k = queries[i][3], d = queries[i][2], r = queries[i][1];
        let l = queries[i][0];
        while (l <= r) nums[l] = k * nums[l] % 1000000007, l += d;
    }
    return nums.reduce((s, e) => s ^ e);
}
