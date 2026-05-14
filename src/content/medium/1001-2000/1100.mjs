// 1100. Find K-Length Substrings With No Repeated Characters

function numKLenSubstrNoRepeats(s, k) {
    let res = 0;
    const B = new Uint16Array(26);
    for (let i = 0; i < k - 1; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    for (let i = k - 1; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
        let j = 0;
        while (j < 26 && B[j] <= 1) j++;
        if (j === 26) res++;
        B[s.charCodeAt(i - k + 1) - 97]--;
    }
    return res;
}
