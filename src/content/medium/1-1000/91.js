// 91 - Decode Ways

function numDecodings(s) {
    let a = 1, b = s.at(-1) > 0 ? 1 : 0, i = s.length - 1;
    while (~--i) {
        let next = s[i] > 0 ? b : 0;
        if (s[i] === '1') next += a;
        else if (s[i] === '2' && s[i + 1] < 7) next += a;
        a = b, b = next;
    }
    return b;
}
