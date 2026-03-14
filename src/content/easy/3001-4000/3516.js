// 3516 - Find Closest Person

function findClosest(x, y, z) {
    const abs1 = Math.abs(x - z), abs2 = Math.abs(y - z);
    return abs1 === abs2 ? 0 : abs1 < abs2 ? 1 : 2;
}
