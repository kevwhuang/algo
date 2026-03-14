// 387 - First Unique Character in a String

function firstUniqChar(s) {
    const B = new Uint32Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (B[s.charCodeAt(i) - 97] === 1) return i;
    }
    return -1;
}
