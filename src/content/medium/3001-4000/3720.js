// 3720 - Lexicographically Smallest Permutation Greater Than Target

function lexGreaterPermutation(s, target) {
    const B = new Int16Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
        B[target.charCodeAt(i) - 97]--;
    }
    for (let i = s.length - 1; ~i; i--) {
        B[target.charCodeAt(i) - 97]++;
        if (B.some(e => e < 0)) continue;
        let j = target.charCodeAt(i) - 96;
        while (j < 26 && B[j] === 0) j++;
        if (j === 26) continue;
        let res = target.slice(0, i) + String.fromCharCode(j + 97);
        B[j]--, j = -1;
        while (++j < 26) res += String.fromCharCode(j + 97).repeat(B[j]);
        return res;
    }
    return '';
}
