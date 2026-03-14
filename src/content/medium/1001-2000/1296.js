// 1296 - Divide Array in Sets of K Consecutive Numbers

function isPossibleDivide(nums, k) {
    if (nums.length % k) return false;
    nums = new Uint32Array(nums).sort();
    const B = new Map();
    nums.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i], d = B.get(cur);
        if (d === 0) continue;
        for (let j = 0; j < k; j++) {
            if (!B.get(cur + j)) return false;
            B.set(cur + j, B.get(cur + j) - d);
        }
    }
    return true;
}
