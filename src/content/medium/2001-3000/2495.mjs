// 2495 - Number of Subarrays Having Even Product

function evenProduct(nums) {
    let subarrays = 0;
    for (let i = 0, j = -1; i < nums.length; i++) {
        if (nums[i] % 2 === 0) j = i;
        subarrays += j + 1;
    }
    return subarrays;
}
