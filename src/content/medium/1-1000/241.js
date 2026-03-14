// 241 - Different Ways to Add Parentheses

function diffWaysToCompute(expression) {
    function dfs(cur) {
        if (memo[cur]) return memo[cur];
        if (!isNaN(cur)) return [Number(cur)];
        const res = [];
        for (let i = 0; i < cur.length; i++) {
            if (!fns[cur[i]]) continue;
            const left = dfs(cur.slice(0, i));
            const right = dfs(cur.slice(i + 1));
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    res.push(fns[cur[i]](left[j], right[k]));
                }
            }
        }
        return memo[cur] = res;
    }
    const fns = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    };
    const memo = {};
    return dfs(expression);
}
