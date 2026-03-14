// 1734 - Decode XORed Permutation

function decode(encoded) {
    let xor = 0;
    const bound = encoded.length + 1;
    for (let n = 1; n <= bound; n++) {
        xor ^= n;
    }
    for (let i = 1; i < encoded.length; i += 2) {
        xor ^= encoded[i];
    }
    const perm = new Uint32Array(bound);
    perm[0] = xor;
    for (let i = 1; i < perm.length; i++) {
        perm[i] = perm[i - 1] ^ encoded[i - 1];
    }
    return perm;
}
