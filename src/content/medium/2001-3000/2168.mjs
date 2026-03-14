// 2168 - Unique Substrings With Equal Digit Frequency

function equalDigitFrequency(s) {
    const set = new Set();
    const mod = 1e9 + 7;
    for (let i = 0; i < s.length; i++) {
        const bucket = new Array(10).fill(0);
        let unique = 0, max = 0, hash = 0;
        for (let j = i; j < s.length; j++) {
            const digit = Number(s[j]);
            if (bucket[digit] === 0) unique++;
            max = Math.max(++bucket[digit], max);
            hash = (10 * hash + digit + 1) % mod;
            if (unique * max === j - i + 1) set.add(hash);
        }
    }
    return set.size;
}
