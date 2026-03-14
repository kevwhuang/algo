// 2232 - Minimize Result by Adding Parentheses to Expression

function minimizeResult(expression) {
    let res, min = Infinity;
    const idx = expression.indexOf('+');
    for (let i = 0; i < idx; i++) {
        const a = expression.slice(0, i);
        const b = Number(expression.slice(i, idx));
        for (let j = idx + 2; j <= expression.length; j++) {
            const c = Number(expression.slice(idx + 1, j));
            const d = expression.slice(j);
            const val = (a || 1) * (b + c) * (d || 1);
            if (val >= min) continue;
            res = `${a}(${b}+${c})${d}`;
            min = val;
        }
    }
    return res;
}
