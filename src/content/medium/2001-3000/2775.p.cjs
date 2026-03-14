// 2775 - Undefined to Null

function undefinedToNull(obj) {
    if (obj === undefined || obj === null) return null;
    if (typeof obj !== 'object') return obj;
    for (const key in obj) {
        obj[key] = undefinedToNull(obj[key]);
    }
    return obj;
}
