// 39 - Combination Sum

function combinationSum(candidates, target) {
    function backtrack(i, acc) {
        if (i === candidates.length || acc > target) return;
        if (acc === target) return res.push(new Uint8Array(cur));
        cur.push(candidates[i]);
        backtrack(i, acc + candidates[i]);
        cur.pop();
        backtrack(i + 1, acc);
    }
    const res = [], cur = [];
    backtrack(0, 0);
    return res;
}
