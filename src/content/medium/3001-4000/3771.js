// 3771 - Total Score of Dungeon Runs

function totalScore(hp, damage, requirement) {
    const ps = damage, n = ps.length;
    for (let i = 1; i < n; i++) {
        ps[i] += ps[i - 1];
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        const tgt = ps[i] + requirement[i] - hp;
        let l = 0, r = i;
        while (l <= r) {
            const m = l + r >> 1;
            if ((m ? ps[m - 1] : 0) < tgt) l = m + 1;
            else r = m - 1;
        }
        if (l <= i) res += i - l + 1;
    }
    return res;
}
