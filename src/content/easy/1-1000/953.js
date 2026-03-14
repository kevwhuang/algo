// 953 - Verifying an Alien Dictionary

function isAlienSorted(words, order) {
    const map = new Map();
    for (let i = 0; i < 26; i++) {
        map.set(order[i], i);
    }
    loop: for (let i = 1, j, prev, cur; i < words.length; i++) {
        j = 0, prev = words[i - 1], cur = words[i];
        for (let code1, code2; j < prev.length && j < cur.length; j++) {
            code1 = map.get(prev[j]);
            code2 = map.get(cur[j]);
            if (code1 < code2) continue loop;
            if (code1 > code2) return false;
        }
        if (prev.length > j) return false;
    }
    return true;
}
