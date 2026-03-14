// 1065 - Index Pairs of a String

function indexPairs(text, words) {
    const pairs = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < words.length; j++) {
            const cur = words[j];
            if (text.startsWith(cur, i)) pairs.push([i, i + cur.length - 1]);
        }
    }
    return pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}
