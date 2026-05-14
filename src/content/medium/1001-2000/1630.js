// 1630. Arithmetic Subarrays

function checkArithmeticSubarrays(nums, l, r) {
    const res = [];
    for (let i = 0; i < l.length; i++) {
        const left = l[i], right = r[i];
        const A = new Uint32Array(right - left + 1);
        for (let j = left; j <= right; j++) {
            A[j - left] = nums[j] + 100000;
        }
        A.sort();
        const tgt = A[1] - A[0];
        let j = 2;
        while (j < A.length && A[j] - A[j - 1] === tgt) j++;
        res.push(j === A.length);
    }
    return res;
}
