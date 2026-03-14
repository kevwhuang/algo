// 990 - Satisfiability of Equality Equations

function equationsPossible(equations) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: 26 }, (_, i) => i);
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '!') continue;
        const v1 = equations[i].charCodeAt(0) - 97;
        const v2 = equations[i].charCodeAt(3) - 97;
        uf[find(v1)] = find(v2);
    }
    for (let i = 0; i < equations.length; i++) {
        if (equations[i][1] === '=') continue;
        const v1 = equations[i].charCodeAt(0) - 97;
        const v2 = equations[i].charCodeAt(3) - 97;
        if (find(v1) === find(v2)) return false;
    }
    return true;
}
