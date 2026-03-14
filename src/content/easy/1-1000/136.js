// 136 - Single Number

function singleNumber(nums) {
    return nums.reduce((s, e) => s ^ e);
}
