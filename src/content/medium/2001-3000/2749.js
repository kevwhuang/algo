// 2749 - Minimum Operations to Make the Integer Zero

function makeTheIntegerZero(num1, num2) {
    for (let n = 0; n <= 60; n++) {
        let diff = num1 - n * num2;
        if (n > diff) continue;
        let ones = diff < 0 ? 1 : 0;
        diff = BigInt(Math.abs(diff));
        while (diff) {
            if (diff & 1n) ones++;
            diff >>= 1n;
        }
        if (ones <= n) return n;
    }
    return -1;
}
