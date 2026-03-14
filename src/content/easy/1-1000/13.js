// 13 - Roman to Integer

function romanToInt(s) {
    const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let res = dict[s.at(-1)], i = 0;
    while (++i < s.length) {
        const cur = dict[s[i - 1]];
        res += cur >= dict[s[i]] ? cur : -cur;
    }
    return res;
}
