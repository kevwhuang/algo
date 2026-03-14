// 3675 - Minimum Operations to Transform String

function minOperations(s) {
    const B = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97] = 1;
    }
    for (let i = 1; i < 26; i++) {
        if (B[i]) return 26 - i;
    }
    return 0;
}
