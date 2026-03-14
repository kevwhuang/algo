// 2929 - Distribute Candies Among Children II

function distributeCandies(n, limit) {
    const fn = a => a >= 2 ? a * (a - 1) / 2 : 0;
    const a = fn(n + 2) + 3 * fn(n - 2 * limit);
    const b = fn(n - 3 * limit - 1) + 3 * fn(n - limit + 1);
    return a - b;
}
