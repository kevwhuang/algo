// 3210 - Find the Encrypted String

function getEncryptedString(s, k) {
    let res = '';
    const n = s.length;
    for (let i = 0; i < n; i++) {
        res += s[(i + k) % n];
    }
    return res;
}
