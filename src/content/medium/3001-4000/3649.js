// 3649 - Number of Perfect Pairs

function perfectPairs(nums) {
    const n = nums.length, arr = new Uint32Array(n);
    nums.forEach((e, i) => arr[i] = Math.abs(e));
    arr.sort();
    let res = 0, l = -1, r = 1;
    while (++l < n) {
        while (r < n && 2 * arr[l] >= arr[r]) r++;
        res += r - l - 1;
    }
    return res;
}
