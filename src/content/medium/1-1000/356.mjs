// 356 - Line Reflection

function isReflected(points) {
    const obj = {};
    for (let i = 0; i < points.length; i++) {
        obj[points[i][1]] ??= new Set();
        obj[points[i][1]].add(points[i][0]);
    }
    let line;
    for (const y in obj) {
        const min = Math.min(...obj[y]);
        const max = Math.max(...obj[y]);
        line = (max + min) / 2;
        break;
    }
    for (const y in obj) {
        const set = obj[y];
        for (const x of set) {
            if (!set.has(2 * line - x)) return false;
        }
    }
    return true;
}
