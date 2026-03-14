// 645 - Set Mismatch

function findErrorNums(nums) {
    const arr = [];
    let duplicate;
    let missing = nums.length * (nums.length + 1) / 2;
    for (let i = 0, cur; i < nums.length; i++) {
        cur = nums[i];
        if (cur === arr[cur]) {
            duplicate = cur;
        } else {
            arr[cur] = cur;
            missing -= nums[i];
        }
    }
    return [duplicate, missing];
}
