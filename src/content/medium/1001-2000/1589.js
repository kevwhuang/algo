// 1589 - Maximum Sum Obtained of Any Permutation

function maxSumRangeQuery(nums, requests) {
    let end = -Infinity;
    for (let i = 0; i < requests.length; i++) {
        end = Math.max(requests[i][1], end);
    }
    const prefix = new Array(end + 2).fill(0);
    for (let i = 0; i < requests.length; i++) {
        prefix[requests[i][0]]++;
        prefix[requests[i][1] + 1]--;
    }
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] += prefix[i - 1];
    }
    prefix.pop();
    prefix.sort((a, b) => b - a);
    nums.sort((a, b) => b - a);
    let sum = 0;
    const mod = 1e9 + 7;
    for (let i = 0; i < prefix.length; i++) {
        sum += prefix[i] * nums[i];
        sum %= mod;
    }
    return sum;
}
