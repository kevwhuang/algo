// 3739 - Count Subarrays With Majority Element II

function countMajoritySubarrays(nums, target) {
    if (!this.arr) arr = new Uint16Array(200001);
    const n = nums.length;
    arr.fill(0, 0, n + n + 1);
    let res = 0, acc = 0, i = -1, j = n;
    while (++i < n) {
        acc += nums[i] === target ? arr[j] + 1 : -arr[j + 1];
        res += acc, arr[j]++, j += nums[i] === target ? -1 : 1;
    }
    return res;
}
