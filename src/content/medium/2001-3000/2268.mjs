// 2268 - Minimum Number of Keypresses

function minimumKeypresses(s) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqs[s.charCodeAt(i) - 97]++;
    }
    freqs.sort((a, b) => b - a);
    let keypresses = 0;
    for (let i = 0; i < 26; i++) {
        if (freqs[i] === 0) break;
        if (i < 9) keypresses += freqs[i];
        else if (i < 18) keypresses += 2 * freqs[i];
        else keypresses += 3 * freqs[i];
    }
    return keypresses;
}
