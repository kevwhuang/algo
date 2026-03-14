// 890 - Find and Replace Pattern

function findAndReplacePattern(words, pattern) {
    const matches = [];
    const len = words[0].length;
    L: for (let i = 0; i < words.length; i++) {
        const cur = words[i], map = new Map();
        for (let j = 0; j < len; j++) {
            if (!map.has(pattern[j])) map.set(pattern[j], cur[j]);
            else if (map.get(pattern[j]) !== cur[j]) continue L;
        }
        if (map.size !== new Set(map.values()).size) continue;
        matches.push(cur);
    }
    return matches;
}
