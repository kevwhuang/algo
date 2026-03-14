// 3713 - Longest Balanced Substring I

function longestBalanced(s) {
    let res = 1, i = -1;
    const B = new Uint16Array(26), n = s.length;
    while (++i < n) {
        B.fill();
        let acc, max = 0, j = i;
        while (j < n) {
            const cur = ++B[s.charCodeAt(j++) - 97], d = j - i;
            if (cur > max) acc = 1, max = cur;
            else if (cur === max) acc++;
            if (d > res && d === acc * max) res = d;
        }
    }
    return res;
}
