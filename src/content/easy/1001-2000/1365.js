// 1365 - How Many Numbers Are Smaller Than the Current Number

function smallerNumbersThanCurrent(nums) {
    const freqs = new Array(101).fill(0);
    const cumulative = [0];
    for (let i = 0; i < nums.length; i++) {
        freqs[nums[i]]++;
    }
    for (let i = 1; i < 101; i++) {
        cumulative[i] = cumulative[i - 1] + freqs[i - 1];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = cumulative[nums[i]];
    }
    return nums;
}
