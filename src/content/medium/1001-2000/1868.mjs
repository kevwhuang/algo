// 1868 - Product of Two Run-Length Encoded Arrays

function findRLEArray(encoded1, encoded2) {
    const res = [], len = encoded1.length;
    let i = 0, j = 0;
    while (i < len) {
        const e1 = encoded1[i], e2 = encoded2[j];
        const prod = e1[0] * e2[0];
        const min = Math.min(e1[1], e2[1]);
        e1[1] -= min;
        e2[1] -= min;
        if (e1[1] === 0) i++;
        if (e2[1] === 0) j++;
        const tail = res[res.length - 1];
        if (tail && tail[0] === prod) tail[1] += min;
        else res.push([prod, min]);
    }
    return res;
}
