// 229 - Majority Element II

function majorityElement(nums) {
    let n;
    const goal = ~~(nums.length / 3);
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const freq = map.get(nums[i]) + 1 || 1;
        map.set(nums[i], freq);
        if (freq <= goal) continue;
        if (n === undefined) n = nums[i];
        else if (n !== nums[i]) return [n, nums[i]];
    }
    return n === undefined ? [] : [n];
}
