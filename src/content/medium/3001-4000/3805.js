// 3805 - Count Caesar Cipher Pairs

function countPairs(words) {
    let res = 0;
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        let key = '';
        const s = words[i], d = 123 - s.charCodeAt();
        for (let j = 0; j < s.length; j++) {
            key += String.fromCharCode(((s.charCodeAt(j) + d - 97) % 26) + 97);
        }
        res += map.get(key) ?? 0;
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    return res;
}
