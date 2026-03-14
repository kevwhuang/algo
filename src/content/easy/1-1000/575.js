// 575 - Distribute Candies

function distributeCandies(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
}
