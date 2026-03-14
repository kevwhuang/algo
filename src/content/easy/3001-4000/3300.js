// 3300 - Minimum Element After Replacement With Digit Sum

function minElement(nums) {
    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let acc = 0, cur = nums[i];
        while (cur) acc += cur % 10, cur = cur / 10 >> 0;
        res = Math.min(acc, res);
    }
    return res;
}
