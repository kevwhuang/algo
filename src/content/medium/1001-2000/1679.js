// 1679 - Max Number of K-Sum Pairs

function maxOperations(nums, k) {
    let ops = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n > k) continue;
        if (map.get(k - n)) {
            map.set(k - n, map.get(k - n) - 1);
            ops++;
        } else {
            map.set(n, (map.get(n) || 0) + 1);
        }
    }
    return ops;
}
