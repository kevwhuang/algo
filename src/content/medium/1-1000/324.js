// 324 - Wiggle Sort II

function wiggleSort(nums) {
    const sorted = new Uint16Array(nums).sort();
    let j = nums.length - 1;
    for (let i = 1; i < nums.length; i += 2) {
        nums[i] = sorted[j--];
    }
    for (let i = 0; i < nums.length; i += 2) {
        nums[i] = sorted[j--];
    }
}
