// 2220 - Minimum Bit Flips to Convert Number

function minBitFlips(start, goal) {
    let flips = 0, xor = start ^ goal;
    while (xor) {
        if (xor & 1) flips++;
        xor >>= 1;
    }
    return flips;
}
