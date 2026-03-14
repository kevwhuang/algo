// 2705 - Compact Object

function compactObject(obj) {
    if (typeof obj !== 'object') return obj;
    const res = Array.isArray(obj) ? [] : {};
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i]) res.push(compactObject(obj[i]));
        }
    } else {
        for (const key in obj) {
            if (obj[key]) res[key] = compactObject(obj[key]);
        }
    }
    return res;
}
