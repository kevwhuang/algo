// 1437 - Check If All 1's Are at Least Length K Places Away

function kLengthApart(nums, k) {
    if (k === 0) return true;
    let idx = nums.indexOf(1);
    if (idx === -1) return true;
    for (let i = idx + 1; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        if (i - idx - 1 < k) return false;
        idx = i;
    }
    return true;
}
