// 3662 - Filter Characters by Frequency

function filterCharacters(s, k) {
    const B = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (B[s.charCodeAt(i) - 97] < k) res += s[i];
    }
    return res;
}
