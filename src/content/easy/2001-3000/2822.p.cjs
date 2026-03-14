// 2822 - Inversion of Object

function invertObject(obj) {
    const res = {};
    for (const key in obj) {
        const cur = obj[key];
        if (Array.isArray(res[cur])) res[cur].push(key);
        else res[cur] = res[cur] ? [res[cur], key] : key;
    }
    return res;
}
