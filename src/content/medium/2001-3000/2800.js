// 2800 - Shortest String That Contains Three Strings

function minimumString(a, b, c) {
    function check(a, b, c) {
        const str = merge(merge(a, b), c);
        if (str.length > res.length) return;
        if (str.length < res.length || str < res) res = str;
    }
    function merge(a, b) {
        for (let i = 0; i < a.length; i++) {
            let j = 0;
            while (i + j < a.length && j < b.length && a[i + j] === b[j]) j++;
            if (i + j === a.length || j === b.length) return a + b.slice(j);
        }
        return a + b;
    }
    let res = merge(merge(a, b), c);
    check(a, c, b);
    check(b, a, c);
    check(b, c, a);
    check(c, a, b);
    check(c, b, a);
    return res;
}
