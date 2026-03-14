// 2498 - Frog Jump II

function maxJump(stones) {
    let cost = stones[1] - stones[0];
    for (let i = 2; i < stones.length; i++) {
        cost = Math.max(stones[i] - stones[i - 2], cost);
    }
    return cost;
}
