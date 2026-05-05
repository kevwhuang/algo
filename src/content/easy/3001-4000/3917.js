// 3917. Count Indices With Opposite Parity

function countOppositeParity(nums) {
    for (let acc1 = 0, acc2 = 0, i = nums.length - 1; ~i; i--) {
        const cur = nums[i];
        nums[i] = cur % 2 ? acc1 : acc2;
        if (cur % 2) acc2++;
        else acc1++;
    }
    return nums;
}
