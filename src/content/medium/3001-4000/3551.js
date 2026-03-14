// 3551 - Minimum Swaps to Sort by Digit Sum

function minSwaps(nums) {
    const n = nums.length;
    const arr1 = new Uint8Array(n), arr2 = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        let acc = 0, cur = nums[i];
        while (cur) acc += cur % 10, cur = cur / 10 >> 0;
        arr1[i] = acc, arr2[i] = i;
    }
    arr2.sort((a, b) => arr1[a] - arr1[b] || nums[a] - nums[b]);
    let res = 0, i = -1;
    while (++i < n) {
        while (arr2[i] !== i) {
            const cur = arr2[arr2[i]];
            res++, arr2[arr2[i]] = arr2[i], arr2[i] = cur;
        }
    }
    return res;
}
