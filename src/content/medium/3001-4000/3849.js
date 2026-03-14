// 3849 - Maximum Bitwise XOR After Rearrangement

function maximumXor(s, t) {
    let acc = 0;
    const n = t.length;
    for (let i = 0; i < n; i++) {
        if (t[i] === '1') acc++;
    }
    const res = s.split``;
    for (let i = 0; acc && i < n; i++) {
        if (s[i] === '0') res[i] = '1', acc--;
    }
    for (let i = n - 1; acc && ~i; i--) {
        if (s[i] === '1') res[i] = '0', acc--;
    }
    return res.join``;
}
