// 1785 - Minimum Elements to Add to Form a Given Sum

function minElements(nums, limit, goal) {
    const sum = nums.reduce((s, e) => s + e);
    return Math.ceil(Math.abs(sum - goal) / limit);
}
