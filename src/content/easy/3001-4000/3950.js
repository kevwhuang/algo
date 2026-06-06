// 3950. Exactly One Consecutive Set Bits Pair

function consecutiveSetBits(n) {
    let acc = 0, prev;
    while (n) {
        if (n & 1 === prev) acc++;
        prev = n & 1, n >>= 1;
    }
    return acc === 1;
}
