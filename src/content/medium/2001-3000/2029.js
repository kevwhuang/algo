// 2029 - Stone Game IX

function stoneGameIX(stones) {
    const bucket = [0, 0, 0];
    for (let i = 0; i < stones.length; i++) {
        bucket[stones[i] % 3]++;
    }
    return bucket[0] & 1
        ? Math.abs(bucket[1] - bucket[2]) > 2
        : bucket[1] && bucket[2];
}
