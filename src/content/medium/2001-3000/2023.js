// 2023 - Number of Pairs of Strings With Concatenation Equal to Target

function numOfPairs(nums, target) {
    const len = nums.length;
    let pairs = 0;
    for (let i = 0, curLen; i < len; i++) {
        if (!target.startsWith(nums[i])) continue;
        curLen = nums[i].length;
        for (let j = 0; j < i; j++) {
            if (curLen + nums[j].length === target.length) {
                if (target.endsWith(nums[j])) pairs++;
            }
        }
        for (let j = i + 1; j < len; j++) {
            if (curLen + nums[j].length === target.length) {
                if (target.endsWith(nums[j])) pairs++;
            }
        }
    }
    return pairs;
}
