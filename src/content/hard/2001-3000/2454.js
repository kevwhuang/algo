// 2454 - Next Greater Element IV

function secondGreaterElement(nums) {
    const res = new Int32Array(nums.length).fill(-1);
    const S1 = [], S2 = [], S3 = [];
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        while (S1.length && nums[S1.at(-1)] < a) res[S1.pop()] = a;
        while (S2.length && nums[S2.at(-1)] < a) S3.push(S2.pop());
        while (S3.length) S1.push(S3.pop());
        S2.push(i);
    }
    return res;
}
