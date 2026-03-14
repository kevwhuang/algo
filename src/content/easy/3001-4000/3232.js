// 3232 - Find If Digit Game Can Be Won

function canAliceWin(nums) {
    let acc1 = 0, acc2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) acc1 += nums[i];
        else acc2 += nums[i];
    }
    return acc1 !== acc2;
}
