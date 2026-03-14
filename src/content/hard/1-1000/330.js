// 330 - Patching Array

function minPatches(nums, n) {
    let res = 0, acc = 0, i = 0;
    while (acc < n) {
        if (i < nums.length && nums[i] <= acc + 1) acc += nums[i++];
        else res++, acc += acc + 1;
    }
    return res;
}
