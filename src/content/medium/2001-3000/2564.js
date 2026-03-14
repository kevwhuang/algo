// 2564 - Substring XOR Queries

function substringXorQueries(s, queries) {
    const map = new Map(), n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '0' && !map.has(0)) map.set(0, i);
        if (s[i] === '0') continue;
        const bound = Math.min(i + 30, n);
        for (let j = i, num = 0; j < bound; j++, num <<= 1) {
            if (s[j] === '1') num++;
            if (!map.has(num)) map.set(num, i);
        }
    }
    for (let i = 0; i < queries.length; i++) {
        const xor = queries[i][0] ^ queries[i][1];
        const idx = map.get(xor);
        if (!map.has(xor)) queries[i][0] = queries[i][1] = -1;
        else if (!xor) queries[i][0] = queries[i][1] = idx;
        else queries[i][0] = idx, queries[i][1] = idx - Math.clz32(xor) + 31;
    }
    return queries;
}
