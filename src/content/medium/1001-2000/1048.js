// 1048 - Longest String Chain

function longestStrChain(words) {
    const dp = new Map();
    const B = Array.from({ length: 17 }, () => []);
    for (let i = 0; i < words.length; i++) {
        dp.set(words[i], 1);
        B[words[i].length].push(words[i]);
    }
    for (let i = 1; i < 16; i++) {
        const cur = B[i], next = B[i + 1];
        for (let j = 0; j < cur.length; j++) {
            const s = cur[j], a = dp.get(s);
            for (let k = 0; k < next.length; k++) {
                const t = next[k], b = dp.get(t);
                let l = 0, r = 0;
                while (l < s.length && r - l < 2) {
                    if (s[l] === t[r]) l++, r++;
                    else if (r - l < 2) r++;
                }
                if (r - l < 2) dp.set(t, Math.max(a + 1, b));
            }
        }
    }
    return Math.max(...dp.values());
}
