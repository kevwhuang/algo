// 3741 - Minimum Distance Between Three Equal Elements II

function minimumDistance(nums) {
    if (!this.arr1) arr1 = new Uint32Array(100001);
    if (!this.arr2) arr2 = new Uint32Array(100001);
    arr1.fill(500000, 0, nums.length + 1);
    arr2.fill(500000, 0, nums.length + 1);
    let res = Infinity, i = -1;
    while (++i < nums.length) {
        const cur = nums[i];
        if (arr1[cur] === 500000) arr1[cur] = i;
        else if (arr2[cur] === 500000) arr2[cur] = i;
        else {
            res = Math.min(2 * (i - arr1[cur]), res);
            arr1[cur] = arr2[cur], arr2[cur] = i;
        }
    }
    return res < Infinity ? res : -1;
}
