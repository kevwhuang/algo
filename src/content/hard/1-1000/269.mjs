// 269 - Alien Dictionary

function alienOrder(words) {
    const adj = new Map();
    for (let i = 0; i < words.length; i++) {
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            if (!adj.has(s[j])) adj.set(s[j], [0]);
        }
    }
    for (let i = 1; i < words.length; i++) {
        const s = words[i - 1], t = words[i];
        const min = Math.min(s.length, t.length);
        let j = 0;
        while (j < min) {
            if (s[j] === t[j] && ++j) continue;
            adj.get(s[j]).push(t[j]);
            adj.get(t[j])[0]++;
            break;
        }
        if (j < s.length && j === min) return '';
    }
    let res = '', Q = [];
    adj.forEach((e, key) => e[0] === 0 && Q.push(key));
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            res += Q[i];
            const arr = adj.get(Q[i]);
            for (let j = 1; j < arr.length; j++) {
                if (--adj.get(arr[j])[0]) continue;
                N.push(arr[j]);
            }
        }
        Q = N;
    }
    return res.length === adj.size ? res : '';
}
