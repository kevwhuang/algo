// 3206 - Alternating Groups I

function numberOfAlternatingGroups(colors) {
    let res = 0;
    const n = colors.length;
    for (let i = 0; i < n; i++) {
        if (colors[i] === colors[(i + 1) % n]) continue;
        if (colors[i] !== colors[(i + 2) % n]) continue;
        res++;
    }
    return res;
}
