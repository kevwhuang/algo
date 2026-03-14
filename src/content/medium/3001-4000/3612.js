// 3612 - Process String With Special Operations I

function processStr(s) {
    let res = '', i = -1;
    while (++i < s.length) {
        const t = s[i];
        if (t >= 'a' && t <= 'z') res += t;
        else if (t === '#') res += res;
        else if (t === '*') res = res.slice(0, -1);
        if (t !== '%') continue;
        let next = '', j = res.length;
        while (~--j) next += res[j];
        res = next;
    }
    return res;
}
