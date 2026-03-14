// 3069 - Distribute Elements Into Two Arrays I

function resultArray(nums) {
    const arr1 = [nums[0]], arr2 = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        const tail1 = arr1.length - 1, tail2 = arr2.length - 1;
        (arr1[tail1] > arr2[tail2] ? arr1 : arr2).push(nums[i]);
    }
    return arr1.concat(arr2);
}
