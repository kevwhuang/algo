// 137 - Single Number II

function singleNumber(nums) {
    let once = 0, twice = 0;
    for (let i = 0; i < nums.length; i++) {
        once = (once ^ nums[i]) & ~twice;
        twice = (twice ^ nums[i]) & ~once;
    }
    return once;
}
