// 1647 - Minimum Deletions to Make Character Frequencies Unique

function minDeletions(s) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
    }
    freqs.sort((a, b) => b - a);
    const seen = new Set(freqs);
    let count = 0;
    for (let i = 1; i < freqs.length; i++) {
        if (freqs[i - 1] !== freqs[i]) continue;
        let freq = freqs[i];
        while (seen.has(freq) && freq-- > 0) count++;
        seen.add(freq);
    }
    return count;
}
