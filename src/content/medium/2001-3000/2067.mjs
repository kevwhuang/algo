// 2067 - Number of Equal Count Substrings

function equalCountSubstrings(s, count) {
    let substrings = 0;
    for (let k = 1; k <= 26; k++) {
        let chars = 0;
        const freqs = new Array(26).fill(0);
        const size = Math.min(k * count, s.length);
        for (let i = 0; i < size; i++) {
            if (++freqs[s.charCodeAt(i) - 97] === count) chars++;
            if (chars === k) substrings++;
        }
        for (let i = size; i < s.length; i++) {
            if (++freqs[s.charCodeAt(i) - 97] === count) chars++;
            if (freqs[s.charCodeAt(i - size) - 97]-- === count) chars--;
            if (chars === k) substrings++;
        }
    }
    return substrings;
}
