// 748. Shortest Completing Word

function shortestCompletingWord(licensePlate, words) {
    const B = new Int8Array(26);
    const s = licensePlate.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        if (0 <= key && key <= 26) B[key]++;
    }
    let res = -1;
    for (let i = 0; i < words.length; i++) {
        const t = words[i];
        if (~res && words[res].length <= t.length) continue;
        for (let j = 0; j < t.length; j++) {
            B[t.charCodeAt(j) - 97]--;
        }
        if (B.every(e => e <= 0)) res = i;
        for (let j = 0; j < t.length; j++) {
            B[t.charCodeAt(j) - 97]++;
        }
    }
    return words[res];
}
