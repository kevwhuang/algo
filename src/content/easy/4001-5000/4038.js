// 4038. Count Integers Appearing in a Single Block

function countSpecialIntegers(nums) {
    let res = 0;
    const A = new Int8Array(101).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (A[cur] === -1) res++, A[cur] = i;
        else if (i - A[cur] === 1) A[cur] = i;
        else if (A[cur] !== -2) res--, A[cur] = -2;
    }
    return res;
}
