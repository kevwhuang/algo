// 761 - Special Binary String

function makeLargestSpecial(s) {
    const res = [];
    let acc = 0, l = 1, r = -1;
    while (++r < s.length) {
        acc += s[r] === '0' ? -1 : 1;
        if (acc) continue;
        res.push(`1${makeLargestSpecial(s.slice(l, r))}0`);
        l = r + 2;
    }
    return res.sort((a, b) => a < b ? 1 : -1).join``;
}
