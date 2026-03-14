// 659 - Split Array Into Consecutive Subsequences

function isPossible(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] ??= 0;
        map[nums[i]]++;
    }
    const next = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === 0) continue;
        map[num]--;
        if (next[num]) {
            next[num]--;
            next[num + 1] ??= 0;
            next[num + 1]++;
        } else if (map[num + 1] && map[num + 2]) {
            map[num + 1]--;
            map[num + 2]--;
            next[num + 3] ??= 0;
            next[num + 3]++;
        } else return false;
    }
    return true;
}
