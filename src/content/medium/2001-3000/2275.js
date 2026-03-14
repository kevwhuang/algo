// 2275 - Largest Combination With Bitwise AND Greater Than Zero

function largestCombination(candidates) {
    const bits = new Uint32Array(24);
    for (let i = 0; i < candidates.length; i++) {
        let num = candidates[i], j = 0;
        while (num) {
            if (num & 1) bits[j]++;
            num >>= 1;
            j++;
        }
    }
    return Math.max(...bits);
}
