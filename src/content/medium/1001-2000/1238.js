// 1238 - Circular Permutation in Binary Representation

function circularPermutation(n, start) {
    const bound = 1 << n;
    const sequence = new Uint16Array(bound);
    for (let i = 0; i < bound; i++) {
        sequence[i] = start ^ i ^ i >> 1;
    }
    return sequence;
}
