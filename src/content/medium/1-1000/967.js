// 967 - Numbers With Same Consecutive Differences

function numsSameConsecDiff(n, k) {
    function backtrack(i) {
        if (i === n) return res.push(Number(cur.join('')));
        let next = Number(cur[i - 1]) + k;
        if (next < 10) {
            cur[i] = next;
            backtrack(i + 1);
        }
        if (k === 0) return;
        next = Number(cur[i - 1]) - k;
        if (next >= 0) {
            cur[i] = next;
            backtrack(i + 1);
        }
    }
    const res = [], cur = new Array(n);
    for (let d = 1; d <= 9; d++) {
        cur[0] = d;
        backtrack(1);
    }
    return res;
}
