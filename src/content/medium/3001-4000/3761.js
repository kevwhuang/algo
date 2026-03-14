// 3761 - Minimum Absolute Distance Between Mirror Pairs

function minMirrorPairDistance(nums) {
    let res = Infinity, i = -1;
    const map = new Map();
    while (++i < nums.length) {
        if (map.has(nums[i])) res = Math.min(i - map.get(nums[i]), res);
        let key = 0, cur = nums[i];
        while (cur) key = 10 * key + cur % 10, cur = cur / 10 >> 0;
        map.set(key, i);
    }
    return res < Infinity ? res : -1;
}
