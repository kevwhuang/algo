// 2085 - Count Common Words With One Occurrence

function countWords(words1, words2) {
    const map1 = new Map();
    for (let i = 0; i < words1.length; i++) {
        map1.set(words1[i], map1.get(words1[i]) + 1 || 1);
    }
    const map2 = new Map();
    for (let i = 0; i < words2.length; i++) {
        map2.set(words2[i], map2.get(words2[i]) + 1 || 1);
    }
    let count = 0;
    for (const e of map1.keys()) {
        if (map1.get(e) === 1 && map2.get(e) === 1) count++;
    }
    return count;
}
