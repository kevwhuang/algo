// 2808 - Minimum Seconds to Equalize a Circular Array

function minimumSeconds(nums) {
    const map = new Map(), len = nums.length;
    for (let i = 0; i < len; i++) {
        const data = map.get(nums[i]);
        if (!data) map.set(nums[i], [i, i, 0]);
        else data[2] = Math.max(i - data[1], data[2]), data[1] = i;
    }
    let gap = 1e5;
    for (const data of map.values()) {
        gap = Math.min(Math.max(len + data[0] - data[1], data[2]), gap);
    }
    return gap >> 1;
}
