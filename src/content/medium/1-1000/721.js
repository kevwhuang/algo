// 721 - Accounts Merge

function accountsMerge(accounts) {
    const union = (v1, v2) => uf[find(v1)] = find(v2);
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: accounts.length }, (_, i) => i);
    const map = new Map();
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const cur = accounts[i][j];
            map.has(cur) ? union(i, map.get(cur)) : map.set(cur, i);
        }
    }
    const groups = new Map();
    for (const cur of map.keys()) {
        const group = find(map.get(cur));
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(cur);
    }
    const res = [];
    for (const group of groups.keys()) {
        res.push([accounts[group][0], ...groups.get(group).sort()]);
    }
    return res;
}
