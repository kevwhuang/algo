// 216 - Combination Sum III

function combinationSum3(k, n) {
    function backtrack(start, sum, cur) {
        if (sum > n) return;
        if (cur.length === k) {
            if (sum === n) combos.push(cur);
            return;
        }
        for (let i = start; i <= 9; i++) {
            backtrack(i + 1, sum + i, cur.concat(i));
        }
    }
    const combos = [];
    backtrack(1, 0, []);
    return combos;
}
