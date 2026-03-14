// 205 - Isomorphic Strings

function isIsomorphic(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (!map.has(cur)) map.set(cur, t[i]);
        else if (map.get(cur) !== t[i]) return false;
    }
    return map.size === new Set(map.values()).size;
}
