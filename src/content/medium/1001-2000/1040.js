// 1040 - Moving Stones Until Consecutive II

function numMovesStonesII(stones) {
    stones.sort((a, b) => a - b);
    let min = Infinity;
    const len = stones.length, lim = len - 2;
    for (let l = 0, r = 1; r < len; r++) {
        while (stones[r] - stones[l] >= len) l++;
        if (r - l === lim && stones[r] - stones[l] === lim) {
            min = Math.min(2, min);
        } else {
            min = Math.min(len + l - r - 1, min);
        }
    }
    const d1 = stones[len - 2] - stones[0];
    const d2 = stones[len - 1] - stones[1];
    return [min, Math.max(d1, d2) - lim];
}
