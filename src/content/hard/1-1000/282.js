// 282 - Expression Add Operators

function addOperators(num, target) {
    function backtrack(i, acc, prev, cur, s) {
        if (i === n && acc === target && cur === 0) res.push(s.slice(1));
        if (i === n) return;
        cur = 10 * cur + Number(num[i++]);
        if (cur) backtrack(i, acc, prev, cur, s);
        backtrack(i, acc + cur, cur, 0, `${s}+${cur}`);
        if (s.length === 0) return;
        backtrack(i, acc - cur, -cur, 0, `${s}-${cur}`);
        const prod = prev * cur;
        backtrack(i, acc + prod - prev, prod, 0, `${s}*${cur}`);
    }
    const res = [], n = num.length;
    backtrack(0, 0, 0, 0, '');
    return res;
}
