// 3839 - Number of Prefix Connected Groups

function prefixConnected(words, k) {
    let res = 0;
    const B = new Map();
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < k) continue;
        const s = words[i].slice(0, k);
        B.set(s, (B.get(s) ?? 0) + 1);
        if (B.get(s) === 2) res++;
    }
    return res;
}
