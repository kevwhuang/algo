// 77 - Combinations

function combine(n, k) {
    function backtrack(i) {
        if (cur.length === k) return res.push([...cur]);
        while (i <= n) {
            cur.push(i);
            backtrack(++i);
            cur.pop();
        }
    }
    const res = [], cur = [];
    backtrack(1);
    return res;
}
