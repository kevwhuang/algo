// 842 - Split Array Into Fibonacci Sequence

function splitIntoFibonacci(num) {
    function backtrack(n1, n2, rem) {
        if (rem.length === 0) return true;
        const next = String(Number(n1) + Number(n2));
        if (Number(next) > lim) return false;
        if (!rem.startsWith(next)) return false;
        return backtrack(n2, next, rem.slice(next.length));
    }
    const bound = num.length / 2, lim = 2147483647;
    for (let i = 1; i < bound; i++) {
        const n1 = num.slice(0, i);
        if (Number(n1) > lim) break;
        if (n1.length > 1 && n1[0] === '0') return [];
        for (let j = i + 1; j < num.length; j++) {
            const n2 = num.slice(i, j);
            const rem = num.slice(j);
            if (Number(n2) > lim) break;
            if (n2.length > 1 && n2[0] === '0') break;
            if (n1.length > rem.length) break;
            if (n2.length > rem.length) break;
            if (!backtrack(n1, n2, rem)) continue;
            const fib = [Number(n1), Number(n2)];
            let len = n1.length + n2.length;
            while (len < num.length) {
                fib.push(fib.at(-2) + fib.at(-1));
                len += fib.at(-1).toString().length;
            }
            return fib;
        }
    }
    return [];
}
