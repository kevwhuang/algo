// 231 - Power of Two

function isPowerOfTwo(n) {
    if (!n) return false;
    const log = Math.log2(n);
    return log === Math.trunc(log);
}
