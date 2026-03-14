// 692 - Top K Frequent Words

function topKFrequent(words, k) {
    words.sort((a, b) => a < b ? -1 : 1);
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], map.get(words[i]) + 1 || 1);
    }
    const entries = [...map.entries()];
    entries.sort((a, b) => b[1] - a[1]);
    const res = new Array(k);
    for (let i = 0; i < k; i++) {
        res[i] = entries[i][0];
    }
    return res;
}
