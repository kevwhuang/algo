// 2468 - Split Message Based on Limit

function splitMessage(message, limit) {
    const n = message.length;
    let acc = 1, d = 1, r = 1;
    while (n + acc > r * (limit - d - 3)) {
        if (d + d + 3 >= limit) return [];
        if (++r === 10 || r === 100 || r === 1000) d++;
        acc += d;
    }
    const res = new Array(r);
    let l = 0, i = 0;
    while (++l <= r) {
        const s = `<${l}/${r}>`;
        res[l - 1] = message.slice(i, i += limit - s.length) + s;
    }
    return res;
}
