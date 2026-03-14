// 70 - Climbing Stairs

function climbStairs(n) {
    const sqrt = 5 ** .5;
    const a = ((1 + sqrt) / 2) ** (n + 1);
    const b = ((1 - sqrt) / 2) ** (n + 1);
    return (a - b) / sqrt >> 0;
}
