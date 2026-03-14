// 280 - Wiggle Sort

function wiggleSort(nums) {
    let i = 1, temp;
    while (i < nums.length) {
        if (nums[i - 1] > nums[i]) {
            temp = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = temp;
        } else if (nums[i] < nums[i + 1]) {
            temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        } else i += 2;
    }
}
