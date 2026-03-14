// 290 - Word Pattern

function wordPattern(pattern, s) {
    s = s.split(' ');
    if (pattern.length !== s.length) return false;
    const map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== s[i]) return false;
        map.set(pattern[i], s[i]);
    }
    return map.size === new Set(map.values()).size;
}
