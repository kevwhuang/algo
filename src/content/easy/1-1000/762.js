// 762 - Prime Number of Set Bits in Binary Representation

function countPrimeSetBits(left, right) {
    function setBits(n) {
        let count = 0;
        while (n) {
            n & 1 && count++;
            n >>>= 1;
        }
        return count;
    }
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    let count = 0;
    for (let i = left; i <= right; i++) {
        primes.has(setBits(i)) && count++;
    }
    return count;
}
