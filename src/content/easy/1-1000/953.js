// 953. Verifying an Alien Dictionary

function isAlienSorted(words, order) {
    const map = new Map();
    for (let i = 0; i < 26; i++) {
        map.set(order[i], i);
    }
    for (let i = 1; i < words.length; i++) {
        const s = words[i - 1], t = words[i];
        const min = Math.min(s.length, t.length);
        let j = -1;
        while (++j < min) {
            const a = map.get(s[j]), b = map.get(t[j]);
            if (a < b) break;
            if (a > b) return false;
        }
        if (j < min) continue;
        if (s.length > t.length) return false;
    }
    return true;
}
