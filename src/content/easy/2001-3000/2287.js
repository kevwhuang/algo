// 2287 - Rearrange Characters to Make Target String

function rearrangeCharacters(s, target) {
    const map1 = new Map();
    for (let i = 0; i < target.length; i++) {
        map1.set(target[i], (map1.get(target[i]) ?? 0) + 1);
    }
    const map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) map2.set(s[i], (map2.get(s[i]) ?? 0) + 1);
    }
    let copies = Infinity;
    for (const e of map1) {
        copies = Math.min(~~(map2.get(e[0]) / e[1]), copies);
    }
    return copies;
}
