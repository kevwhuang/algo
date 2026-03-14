// 2927 - Distribute Candies Among Children III

function distributeCandies(n, limit) {
    const fn = a => a >= 2 ? BigInt(a) * BigInt(a - 1) / 2n : 0n;
    const a = fn(n + 2) + 3n * fn(n - 2 * limit);
    const b = fn(n - 3 * limit - 1) + 3n * fn(n - limit + 1);
    return Number(a - b);
}
