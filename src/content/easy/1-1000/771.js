// 771 - Jewels and Stones

function numJewelsInStones(jewels, stones) {
    let count = 0;
    const set = new Set(jewels);
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) count++;
    }
    return count;
}
