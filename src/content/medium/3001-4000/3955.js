// 3955. Valid Binary Strings With Cost Limit

function generateValidStrings(n, k) {
    function recurse(s, acc) {
        if (s.length === n) return res.push(s);
        recurse(s + '0', acc);
        if (acc + s.length > k || s.at(-1) === '1') return;
        recurse(s + '1', acc + s.length);
    }
    const res = [];
    recurse('', 0);
    return res;
}
