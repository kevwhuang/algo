// 254 - Factor Combinations

function getFactors(n) {
    function backtrack(factor, rem) {
        if (cur.length) res.push(cur.concat(rem));
        while (factor * factor <= rem) {
            if (rem % factor === 0) {
                cur.push(factor);
                backtrack(factor, rem / factor);
                cur.pop();
            }
            factor++;
        }
    }
    const res = [], cur = [];
    backtrack(2, n);
    return res;
}
