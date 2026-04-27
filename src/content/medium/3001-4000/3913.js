// 3913. Sort Vowels by Frequency

function sortVowels(s) {
    const B = new Uint32Array(26), A = new Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
        A[s.charCodeAt(i) - 97] ??= i;
    }
    const ind = [0, 4, 8, 14, 20].filter(e => B[e]);
    ind.sort((a, b) => B[b] - B[a] || A[a] - A[b]);
    let res = '';
    for (let i = 0, j = 0; i < s.length; i++) {
        if (ind.includes(s.charCodeAt(i) - 97)) {
            res += String.fromCharCode(ind[j] + 97);
            if (--B[ind[j]] === 0) j++;
        } else {
            res += s[i];
        }
    }
    return res;
}
