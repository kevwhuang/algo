// 2147. Number of Ways to Divide a Long Corridor

function numberOfWays(corridor) {
    let l = corridor.indexOf('S');
    if (l === -1) return 0;
    l = corridor.indexOf('S', l + 1);
    if (l === -1) return 0;
    let r = corridor.lastIndexOf('S');
    if (r === l) return 1;
    r = corridor.lastIndexOf('S', r - 1);
    if (r === l) return 0;
    let res = 1;
    while (++l) {
        const ll = corridor.indexOf('S', l);
        res = res * (ll - l + 1) % 1000000007;
        if (ll === r) break;
        l = corridor.indexOf('S', ll + 1);
        if (l === r) return 0;
    }
    return res;
}
