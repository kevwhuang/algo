// 1897 - Redistribute Characters to Make All Strings Equal

function makeEqual(words) {
    const B = new Uint16Array(26), n = words.length;
    for (let i = 0; i < n; i++) {
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            B[s.charCodeAt(j) - 97]++;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (B[i] % n) return false;
    }
    return true;
}
