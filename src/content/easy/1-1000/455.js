// 455 - Assign Cookies

function findContentChildren(g, s) {
    g = new Uint32Array(g).sort();
    s = new Uint32Array(s).sort();
    let res = 0, i = 0, j = -1;
    while (i < g.length && ++j < s.length) {
        if (g[i] <= s[j]) res++, i++;
    }
    return res;
}
