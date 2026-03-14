// 2595 - Number of Even and Odd Bits

function evenOddBit(n) {
    let even = 0, odd = 0, isEven = true;
    while (n) {
        if (n & 1) isEven ? even++ : odd++;
        n >>= 1;
        isEven = !isEven;
    }
    return [even, odd];
}
