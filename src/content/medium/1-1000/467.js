// 467 - Unique Substrings in Wraparound String

function findSubstringInWraproundString(s) {
    const arr = new Uint32Array(26);
    let prev, acc, i = -1;
    while (++i < s.length) {
        const key = s.charCodeAt(i) - 97;
        if (prev + 1 === key) acc++;
        else if (prev === 25 && key === 0) acc++;
        else acc = 1;
        arr[key] = Math.max(acc, arr[key]);
        prev = key;
    }
    return arr.reduce((s, e) => s + e);
}
