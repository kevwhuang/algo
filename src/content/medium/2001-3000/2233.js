// 2233 - Maximum Product After K Increments

function maximumProduct(nums, k) {
    nums.sort((a, b) => a - b);
    while (k) {
        const cur = nums[0];
        let i = 0;
        while (k && i < nums.length && nums[i] === cur) {
            nums[i++]++, k--;
        }
    }
    let prod = 1;
    for (let i = 0; i < nums.length; i++) {
        prod = prod * nums[i] % 1000000007;
    }
    return prod;
}
