// 3926. Count Valid Word Occurrences

function countWordOccurrences(chunks, queries) {
    const map = new Map(), s = chunks.join`` + ' ';
    for (let l = 0, r = 0; r < s.length; r++) {
        if (s[r] !== '-' && s[r] !== ' ') continue;
        if (l === r && ++l) continue;
        if (r && s[r - 1] !== '-' && s[r] !== ' ') continue;
        const t = s.slice(l, r - (s[r - 1] === '-'));
        if (t) map.set(t, (map.get(t) ?? 0) + 1);
        l = r + 1;
    }
    queries.forEach((e, i) => queries[i] = map.get(e) ?? 0);
    return queries;
}
