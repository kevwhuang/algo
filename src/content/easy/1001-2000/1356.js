// 1356 - Sort Integers by the Number of 1 Bits

function sortByBits(arr) {
    function hammingWeight(n) {
        let count = 0;
        while (n) {
            n & 1 && count++;
            n >>>= 1;
        }
        return count;
    }
    return arr.sort((a, b) => hammingWeight(a) - hammingWeight(b) || a - b);
}
