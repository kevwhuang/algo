// 2823 - Deep Object Filter

function deepFilter(obj, fn) {
    if (!obj || typeof obj !== 'object') return fn(obj) ? obj : undefined;
    const res = Array.isArray(obj) ? [] : {};
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            const e = deepFilter(obj[i], fn);
            if (e !== undefined) res.push(e);
        }
    } else {
        for (const key in obj) {
            const e = deepFilter(obj[key], fn);
            if (e !== undefined) res[key] = e;
        }
    }
    for (const _ in res) {
        return res;
    }
}
