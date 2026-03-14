// 2138 - Divide a String Into Groups of Size K

function divideString(s, k, fill) {
    const res = [];
    for (let i = 0; i < s.length; i += k) {
        res.push(s.slice(i, i + k));
    }
    res[res.length - 1] = res.at(-1).padEnd(k, fill);
    return res;
}
