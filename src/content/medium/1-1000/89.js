// 89 - Gray Code

function grayCode(n) {
    const bound = 1 << n;
    const sequence = new Uint16Array(bound);
    for (let i = 0; i < bound; i++) {
        sequence[i] = i ^ i >> 1;
    }
    return sequence;
}
