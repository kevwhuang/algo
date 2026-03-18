// 3866. First Unique Even Element

function firstUniqueEven(nums) {
    const B = new Uint8Array(101);
    for (let i = 0; i < nums.length; i++) {
        B[nums[i]]++;
    }
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cur % 2 === 0 && B[cur] === 1) return cur;
    }
    return -1;
}
