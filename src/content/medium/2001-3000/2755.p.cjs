// 2755 - Deep Merge of Two Objects

function deepMerge(obj1, obj2) {
    if (obj1 === null || obj2 === null) return obj2;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj2;
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return obj2;
    for (const key in obj2) {
        obj1[key] = key in obj1 ? deepMerge(obj1[key], obj2[key]) : obj2[key];
    }
    return obj1;
}
