// 922 - Sort Array by Parity II

function sortArrayByParityII(nums) {
    const res = new Array(nums.length);
    let i = 0, even = 0, odd = 1;
    while (i < nums.length) {
        const n = nums[i++];
        if (n % 2) {
            res[odd] = n;
            odd += 2;
        } else {
            res[even] = n;
            even += 2;
        }
    }
    return res;
}
