// 3852 - Smallest Pair With Different Frequencies

function minDistinctFreqPair(nums) {
    const B = new Uint8Array(101);
    nums.forEach(e => B[e]++);
    for (let i = 1; i < 101; i++) {
        if (B[i] === 0) continue;
        for (let j = 1; j < 101; j++) {
            if (B[j] && B[i] !== B[j]) return [i, j];
        }
    }
    return [-1, -1];
}
