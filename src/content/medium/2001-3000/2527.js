// 2527 - Find XOR-Beauty of Array

function xorBeauty(nums) {
    return nums.reduce((s, e) => s ^ e, 0);
}
