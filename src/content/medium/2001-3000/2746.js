// 2746 - Decremental String Concatenation

function minimizeConcatenatedLength(words) {
    const s = words[0], l = s.charCodeAt(), r = s.at(-1).charCodeAt();
    let dp = new Map([[l, new Map([[r, s.length]])]]);
    for (let i = 1; i < words.length; i++) {
        const N = new Map(), s = words[i], n = s.length;
        const l = s.charCodeAt(), r = s.charCodeAt(n - 1);
        if (!N.has(l)) N.set(l, new Map());
        for (const e of dp) {
            const ll = e[0];
            if (!N.has(ll)) N.set(ll, new Map());
            if (!N.get(ll).has(r)) N.get(ll).set(r, 50000);
            for (const f of e[1]) {
                const rr = f[0];
                if (!N.get(l).has(rr)) N.get(l).set(rr, 50000);
                const a = f[1] + n - Number(l === rr);
                const b = f[1] + n - Number(ll === r);
                N.get(ll).set(r, Math.min(a, N.get(ll).get(r)));
                N.get(l).set(rr, Math.min(b, N.get(l).get(rr)));
            }
        }
        dp = N;
    }
    let res = Infinity;
    dp.values().forEach(e => e.forEach(f => res = Math.min(f, res)));
    return res;
}
