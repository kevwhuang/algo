// 22 - Generate Parentheses

function generateParenthesis(n) {
    function backtrack(cur) {
        if (cur.length === tgt) res.push(cur);
        if (a < n) ++a && backtrack(cur + '(') || a--;
        if (a > b) ++b && backtrack(cur + ')') || b--;
    }
    const res = [], tgt = n + n;
    let a = 0, b = 0;
    backtrack('');
    return res;
}
