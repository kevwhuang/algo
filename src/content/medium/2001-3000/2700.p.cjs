// 2700 - Differences Between Two Objects

function objDiff(obj1, obj2) {
    if (obj1 === obj2) return [];
    if (obj1 === null || obj2 === null) return [obj1, obj2];
    if (typeof obj1 !== 'object') return [obj1, obj2];
    if (typeof obj2 !== 'object') return [obj1, obj2];
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];
    const res = {};
    for (const key in obj1) {
        if (!(key in obj2)) continue;
        const arr = objDiff(obj1[key], obj2[key]);
        for (const _ in arr) {
            res[key] = arr;
            break;
        }
    }
    return res;
}
