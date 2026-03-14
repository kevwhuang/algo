// 3170 - Lexicographically Minimum String After Removing Stars

function clearStars(s) {
    const arr = Array.from({ length: 26 }, () => []);
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*') {
            arr[s.charCodeAt(i) - 97].push(i);
            continue;
        }
        for (let code = 0; code < 26; code++) {
            if (arr[code].length === 0) continue;
            arr[code].pop();
            break;
        }
    }
    let res = '';
    const indices = new Uint32Array(26);
    while (true) {
        let next, nextIdx = Infinity;
        for (let code = 0; code < 26; code++) {
            const idx = indices[code];
            if (idx === arr[code].length) continue;
            if (arr[code][idx] > nextIdx) continue;
            next = code;
            nextIdx = arr[code][idx];
        }
        if (next === undefined) return res;
        res += String.fromCharCode(next + 97);
        indices[next]++;
    }
}
