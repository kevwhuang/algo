// 1824 - Minimum Sideway Jumps

function minSideJumps(obstacles) {
    let a = 1, b = 0, c = 1, i = 0;
    const min = Math.min;
    while (++i < obstacles.length) {
        const cur = obstacles[i];
        let aa = cur === 1 ? Infinity : a;
        let bb = cur === 2 ? Infinity : b;
        let cc = cur === 3 ? Infinity : c;
        if (cur % 3 === 0) aa = min(b + 1, aa), bb = min(a + 1, bb);
        if (cur % 2 === 0) aa = min(c + 1, aa), cc = min(a + 1, cc);
        if (cur <= 1) bb = min(c + 1, bb), cc = min(b + 1, cc);
        a = aa, b = bb, c = cc;
    }
    return min(a, b, c);
}
