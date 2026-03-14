// 3783 - Mirror Distance of an Integer

function mirrorDistance(n) {
    let a = 0, cur = n;
    while (cur) a = 10 * a + cur % 10, cur = cur / 10 >> 0;
    return Math.abs(a - n);
}
