// 3289 - The Two Sneaky Numbers of Digitville

function getSneakyNumbers(nums) {
    const res = [], seen = new Uint8Array(nums.length - 2);
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) res.push(nums[i]);
        else seen[nums[i]] = 1;
    }
    return res;
}
