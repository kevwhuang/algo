// 4031. Find All Numbers Disappeared in an Array II

function findDisappearedNumbers(nums, lower, upper) {
    let n = 2;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= lower && nums[i] <= upper) n++;
    }
    const A = new Uint32Array(n);
    A[0] = lower - 1, A[n - 1] = upper + 1;
    for (let i = 0, j = 1; i < nums.length; i++) {
        if (nums[i] >= lower && nums[i] <= upper) A[j++] = nums[i];
    }
    A.sort();
    const res = [];
    for (let i = 1; i < n; i++) {
        if (A[i] - A[i - 1] > 1) res.push([A[i - 1] + 1, A[i] - 1]);
    }
    return res;
}
