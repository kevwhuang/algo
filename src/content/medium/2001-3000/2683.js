// 2683 - Neighboring Bitwise XOR

function doesValidArrayExist(derived) {
    let xor = 0;
    for (let i = 0; i < derived.length; i++) {
        xor ^= derived[i];
    }
    return xor === 0;
}
