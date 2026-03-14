// 1838 - Frequency of the Most Frequent Element

function maxFrequency(nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    const bucket = new Uint32Array(max + 1);
    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    for (let i = 0, n = 1; i < nums.length; i++) {
        while (!bucket[n]) n++;
        bucket[n]--;
        nums[i] = n;
    }
    let res = 1, acc = nums[0];
    for (let l = 0, r = 1; r < nums.length; r++) {
        const num = nums[r];
        acc += num;
        while ((r - l + 1) * num - acc > k) acc -= nums[l++];
        if (r - l + 1 > res) res = r - l + 1;
    }
    return res;
}
