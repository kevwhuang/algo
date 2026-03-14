// 2982 - Find Longest Special Substring That Occurs Thrice II

function maximumLength(s) {
    function insert(i) {
        const code = s.charCodeAt(i - 1) - 97;
        const freq = (arr[code].get(window) ?? 0) + 1;
        arr[code].set(window, freq);
        window = 1;
    }
    const update = len => max = Math.max(len, max);
    const arr = Array.from({ length: 26 }, () => new Map());
    let window = 1;
    for (let i = 1; i < s.length; i++) {
        s[i] === s[i - 1] ? window++ : insert(i);
    }
    insert(s.length);
    let max = -1;
    for (let i = 0; i < 26; i++) {
        const map = arr[i];
        for (const len of map.keys()) {
            if (len <= max) continue;
            const freq = map.get(len);
            if (freq >= 3 && update(len) || len === 1) continue;
            if (map.has(1)) update(1);
            if (len === 2) continue;
            if ((freq === 2 || map.has(len - 1)) && update(len - 1)) continue;
            update(len - 2);
        }
    }
    return max;
}
