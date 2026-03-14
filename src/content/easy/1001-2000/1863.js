// 1863 - Sum of All Subset XOR Totals

function subsetXORSum(nums) {
    return nums.reduce((s, e) => s | e) * 2 ** (nums.length - 1);
}
