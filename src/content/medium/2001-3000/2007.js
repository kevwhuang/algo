// 2007 - Find Original Array From Doubled Array

function findOriginalArray(changed) {
    if (changed.length % 2) return [];
    const freqs = new Array(Math.max(...changed) + 1).fill(0);
    for (let i = 0; i < changed.length; i++) {
        freqs[changed[i]]++;
    }
    const original = [];
    for (let n = 0; n < freqs.length; n++) {
        while (freqs[n] > 0) {
            if (!freqs[n + n]) return [];
            freqs[n]--;
            freqs[n + n]--;
            original.push(n);
        }
    }
    return original;
}
