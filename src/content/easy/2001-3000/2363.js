// 2363 - Merge Similar Items

function mergeSimilarItems(items1, items2) {
    const obj = {};
    for (let i = 0; i < items1.length; i++) {
        const item = items1[i];
        obj[item[0]] = (obj[item[0]] ?? 0) + item[1];
    }
    for (let i = 0; i < items2.length; i++) {
        const item = items2[i];
        obj[item[0]] = (obj[item[0]] ?? 0) + item[1];
    }
    const res = [];
    for (const key in obj) {
        res.push([Number(key), obj[key]]);
    }
    return res;
}
