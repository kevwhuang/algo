// 2692 - Make Object Immutable

function makeImmutable(obj) {
    function dfs(cur) {
        for (const key in cur) {
            const next = cur[key];
            if (next && typeof next === 'object') cur[key] = dfs(next);
        }
        if (!Array.isArray(cur)) return new Proxy(cur, { set: set1 });
        dict.forEach(e => cur[e] = new Proxy(cur[e], { apply }));
        return new Proxy(cur, { set: set2 });
    }
    const apply = cur => { throw `Error Calling Method: ${cur.name}`; };
    const set1 = (_, key) => { throw `Error Modifying: ${key}`; };
    const set2 = (_, key) => { throw `Error Modifying Index: ${key}`; };
    const dict = ['push', 'pop', 'unshift', 'shift'];
    dict.push('splice', 'sort', 'reverse');
    return dfs(obj);
}
