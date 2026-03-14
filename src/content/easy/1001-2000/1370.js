// 1370 - Increasing Decreasing String

function sortString(s) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
    }
    let res = '';
    while (true) {
        for (let i = 0; i < 26; i++) {
            if (freqs[i]) {
                res += String.fromCharCode(i + 97);
                freqs[i]--;
            }
            if (res.length === s.length) return res;
        }
        for (let i = 25; i >= 0; i--) {
            if (freqs[i]) {
                res += String.fromCharCode(i + 97);
                freqs[i]--;
            }
            if (res.length === s.length) return res;
        }
    }
}
