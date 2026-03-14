// 451 - Sort Characters by Frequency

function frequencySort(s) {
    let freqs = {};
    for (let i = 0; i < s.length; i++) {
        freqs[s[i]] = (freqs[s[i]] || 0) + 1;
    }
    freqs = Object.entries(freqs).sort((a, b) => b[1] - a[1]);
    let res = '';
    for (let i = 0; i < freqs.length; i++) {
        res += freqs[i][0].repeat(freqs[i][1]);
    }
    return res;
}
