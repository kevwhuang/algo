// 1898 - Maximum Number of Removable Characters

function maximumRemovals(s, p, removable) {
    const state = new Array(s.length).fill(true);
    let l = 0, r = removable.length - 1, prev = 0;
    while (l <= r) {
        const m = l + r >> 1;
        if (m < prev) {
            for (let i = m + 1; i <= prev; i++) {
                state[removable[i]] = true;
            }
        } else {
            for (let i = prev; i <= m; i++) {
                state[removable[i]] = false;
            }
        }
        prev = m;
        let i = -1, j = 0;
        while (++i < s.length && j < p.length) {
            if (state[i] && s[i] === p[j]) j++;
        }
        if (j === p.length) l = m + 1;
        else r = m - 1;
    }
    return l;
}
