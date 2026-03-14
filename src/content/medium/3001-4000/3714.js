// 3714 - Longest Balanced Substring II

function longestBalanced(s) {
    function check(a, b) {
        let map = new Map([[0, -1]]), acc1 = 0, acc2 = 0, i = -1;
        while (++i < n) {
            if (s[i] === a) acc1++;
            else if (s[i] === b) acc2++;
            else map = new Map([[0, i]]), acc1 = acc2 = 0;
            if (acc1 + acc2 === 0) continue;
            const key = acc1 - acc2;
            if (!map.has(key)) map.set(key, i);
            else res = Math.max(i - map.get(key), res);
        }
    }
    let res = 1, cur, acc1 = 0, acc2 = 0, acc3 = 0, acc4 = 0, i = -1;
    const map = new Map([['0,0', -1]]), n = s.length;
    while (++i < n) {
        if (s[i] === 'a') acc1++;
        else if (s[i] === 'b') acc2++;
        else acc3++;
        const key = `${acc1 - acc2},${acc1 - acc3}`;
        if (!map.has(key)) map.set(key, i);
        else res = Math.max(i - map.get(key), res);
        if (s[i] === cur) res = Math.max(++acc4, res);
        else cur = s[i], acc4 = 1;
    }
    check('a', 'b');
    check('a', 'c');
    check('b', 'c');
    return res;
}
