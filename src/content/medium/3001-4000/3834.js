// 3834 - Merge Adjacent Equal Elements

function mergeAdjacent(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        while (res.length && res.at(-1) === cur) cur += res.pop();
        res.push(cur);
    }
    return res;
}
