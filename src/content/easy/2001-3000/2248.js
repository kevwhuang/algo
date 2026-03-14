// 2248 - Intersection of Multiple Arrays

function intersection(nums) {
    const bucket = new Array(1001).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            bucket[nums[i][j]]++;
        }
    }
    const res = [];
    for (let n = 1; n < bucket.length; n++) {
        if (bucket[n] === nums.length) res.push(n);
    }
    return res;
}
