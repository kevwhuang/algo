// 1046 - Last Stone Weight

function lastStoneWeight(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        stones.push(stones.pop() - stones.pop());
    }
    return stones[0];
}
