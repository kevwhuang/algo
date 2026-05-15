// 1153. String Transforms Into Another String

function canConvert(str1, str2) {
    if (str1 === str2) return true;
    const map = new Map();
    for (let i = 0; i < str1.length; i++) {
        const s = str1[i], t = str2[i];
        if (map.has(s) && map.get(s) !== t) return false;
        map.set(s, t);
    }
    return new Set(map.values()).size < 26;
}
