// 2722 - Join Two Arrays by ID

function join(arr1, arr2) {
    const res = {};
    arr1.forEach(e => res[e.id] = e);
    for (let i = 0; i < arr2.length; i++) {
        const key1 = arr2[i].id;
        if (!res[key1]) res[key1] = arr2[i], arr2[i] = null;
        for (const key2 in arr2[i]) {
            res[key1][key2] = arr2[i][key2];
        }
    }
    return Object.values(res);
}
