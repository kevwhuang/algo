// 2630 - Memoize II

function memoize(fn) {
    function res(...args) {
        const n = args.length;
        if (!memo.has(n)) memo.set(n, new Map());
        let cur = memo.get(n);
        for (let i = 0; i < args.length - 1; i++) {
            if (!cur.has(args[i])) cur.set(args[i], new Map());
            cur = cur.get(args[i]);
        }
        if (!cur.has(args[n - 1])) cur.set(args[n - 1], fn(...args));
        return cur.get(args[n - 1]);
    }
    const memo = new Map();
    return res;
}
