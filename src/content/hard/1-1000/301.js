// 301 - Remove Invalid Parentheses

function removeInvalidParentheses(s) {
    const res = [], seen = new Set([s]);
    let Q = [s], flag;
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const t = Q[i];
            let acc = 0, j = -1;
            while (++j < t.length) {
                if (t[j] === '(') acc++;
                else if (t[j] === ')' && --acc < 0) break;
            }
            if (acc === 0 && res.push(t)) flag = true;
            if (flag) continue;
            j = -1;
            while (++j < t.length) {
                if (t[j] !== '(' && t[j] !== ')') continue;
                const next = t.slice(0, j) + t.slice(j + 1);
                if (seen.has(next)) continue;
                seen.add(next);
                N.push(next);
            }
        }
        Q = N;
    }
    return res;
}
