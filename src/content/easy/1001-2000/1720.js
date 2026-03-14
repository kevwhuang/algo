// 1720 - Decode XORed Array

function decode(encoded, first) {
    const res = new Uint32Array(encoded.length + 1);
    res[0] = first;
    for (let i = 0; i < encoded.length; i++) {
        res[i + 1] = res[i] ^ encoded[i];
    }
    return res;
}
