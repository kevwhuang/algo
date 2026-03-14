// 1486 - XOR Operation in an Array

function xorOperation(n, start) {
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= start + i + i;
    }
    return xor;
}
