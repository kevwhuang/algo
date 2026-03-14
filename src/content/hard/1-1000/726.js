// 726 - Number of Atoms

function countOfAtoms(formula) {
    const S = [], s = formula, n = s.length;
    let r = 0;
    while (r < n) {
        if (s[r] === '(' && S.push(s[r++])) continue;
        if (s[r] === ')') {
            let k = 0;
            while (++r < n && !isNaN(s[r])) k = 10 * k + Number(s[r]);
            k ||= 1;
            let cur, prev, i = S.length - 1;
            do cur = S[i], cur[1] *= k, S[i--] = prev, prev = cur;
            while (prev !== '(');
            S.pop();
            continue;
        }
        let l = r++;
        while (r < n && s[r] >= 'a' && s[r] <= 'z') r++;
        S.push([s.slice(l, r), 1]);
        let k = 0;
        while (r < n && !isNaN(s[r])) k = 10 * k + Number(s[r++]);
        if (k) S.at(-1)[1] = k;
    }
    let res = '';
    const B = new Map();
    S.sort((a, b) => a[0].localeCompare(b[0]));
    S.forEach(e => B.set(e[0], (B.get(e[0]) ?? 0) + e[1]));
    B.forEach((e, key) => res += key + (e > 1 ? e : ''));
    return res;
}
