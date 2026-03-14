// 2794 - Create Object From Two Arrays

function createObject(keysArr, valuesArr) {
    const res = {};
    for (let i = 0; i < keysArr.length; i++) {
        if (keysArr[i] in res) continue;
        res[keysArr[i]] = valuesArr[i];
    }
    return res;
}
