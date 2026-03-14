// 2576 - Find the Maximum Number of Marked Indices

function maxNumOfMarkedIndices(nums) {
    nums = new Uint32Array(nums).sort();
    const n = nums.length;
    let l = 0, r = Math.ceil(n / 2);
    while (true) {
        while (r < n && 2 * nums[l] > nums[r]) r++;
        if (r === n) return l + l;
        l++, r++;
    }
}
