// 294 - Flip Game II

function canWin(currentState) {
    function dfs() {
        const key = cur.join``;
        if (memo1.has(key)) return true;
        if (memo2.has(key)) return false;
        let flag = false, i = 0;
        while (!flag && ++i < n) {
            if (cur[i - 1] === 0 || cur[i] === 0) continue;
            cur[i - 1] = cur[i] = 0;
            flag = !dfs();
            cur[i - 1] = cur[i] = 1;
        }
        (flag ? memo1 : memo2).add(key);
        return flag;
    }
    const n = currentState.length;
    const cur = new Array(n);
    for (let i = 0; i < n; i++) {
        cur[i] = Number(currentState[i] === '+');
    }
    const memo1 = new Set(), memo2 = new Set();
    return dfs();
}
