// 3980. Minimum Operations to Transform Binary String

function minOperations(s1, s2) {
    if (s1 === '1' && s2 === '0') return -1;
    let res = 0;
    const n = s1.length;
    for (let flag, i = 0; i < n; i++) {
        let t = s1[i];
        if (flag) t = t === '0' ? '1' : '0', flag = false;
        if (t === s2[i]) continue;
        if (t === '0' && s2[i] === '1' && ++res) continue;
        if (i === n - 1 && ++res && ++res) continue;
        if (s1[i + 1] === '0') res += 2;
        else res++, flag = true;
    }
    return res;
}
