// 3688 - Bitwise OR of Even Numbers in an Array

function evenNumberBitwiseORs(nums) {
    return nums.reduce((s, e) => s | (e & 1 ? 0 : e), 0);
}
