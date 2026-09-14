// 4049. Count Values With Equally Spaced Occurrences II

function countSpecialIntegers(nums) {
    const B = new Map(), map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i], d = map.get(cur);
        B.set(cur, (B.get(cur) ?? 0) + 1);
        if (d === undefined) map.set(cur, -i);
        else if (d <= 0) map.set(cur, d + i);
        else if (d < 1e6 && nums[i - d] !== cur) map.set(cur, 1e6);
    }
    let res = 0;
    for (const e of B) {
        if (e[1] >= 3 && map.get(e[0]) > 0 && map.get(e[0]) < 1e6) res++;
    }
    return res;
}
