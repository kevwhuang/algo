// 342 - Power of Four

function isPowerOfFour(n) {
    return n > 0 && Math.log2(n) % 2 === 0;
}
