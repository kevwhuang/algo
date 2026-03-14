// 2623 - Memoize

function memoize(fn) {
    function res(a, b) {
        const key = a << 18 | b;
        if (!memo.has(key)) memo.set(key, fn(a, b));
        return memo.get(key);
    }
    const memo = new Map();
    return res;
}
