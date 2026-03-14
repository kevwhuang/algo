// 1061 - Lexicographically Smallest Equivalent String

function smallestEquivalentString(s1, s2, baseStr) {
    function union(v1, v2) {
        const p1 = find(v1);
        const p2 = find(v2);
        if (p1 < p2) uf[p2] = p1;
        else uf[p1] = p2;
    }
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    const uf = Array.from({ length: 26 }, (_, i) => i);
    for (let i = 0; i < s1.length; i++) {
        union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    }
    let res = '';
    for (let i = 0; i < baseStr.length; i++) {
        const code = find(baseStr.charCodeAt(i) - 97) + 97;
        res += String.fromCharCode(code);
    }
    return res;
}
