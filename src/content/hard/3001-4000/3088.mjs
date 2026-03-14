// 3088 - Make String Anti-Palindrome

function makeAntiPalindrome(s) {
    const B = new Uint32Array(26), n = s.length, nn = n / 2;
    for (let i = 0; i < n; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    if (B.some(e => e > nn)) return '-1';
    let t = '', i = 0;
    while (t.length < nn) {
        while (B[i] === 0) i++;
        const min = Math.min(B[i], nn - t.length);
        t += String.fromCharCode(i + 97).repeat(min);
        B[i] -= min;
    }
    let tt = '', j = nn;
    while (~--j) {
        const cur = t.charCodeAt(j) - 97;
        for (let k = 0; k < 26; k++) {
            if (k === cur || B[k] === 0) continue;
            tt += String.fromCharCode(k + 97);
            B[k]--;
            break;
        }
    }
    return t + tt;
}
