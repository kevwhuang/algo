// 3361 - Shift Distance Between Two Strings

function shiftDistance(s, t, nextCost, previousCost) {
    let res = 0, M = new Array(26);
    for (let i = 0; i < s.length; i++) {
        const a = s.charCodeAt(i) - 97, b = t.charCodeAt(i) - 97;
        if (a === b) continue;
        if (!M[a]) {
            M[a] = new Array(26);
            for (let acc = 0, d = 0; d < 25; d++) {
                acc += nextCost[(a + d) % 26];
                M[a][(a + d + 1) % 26] = acc;
            }
            for (let acc = 0, d = 0; d < 25; d++) {
                acc += previousCost[(a - d + 26) % 26];
                if (acc >= M[a][(a - d + 25) % 26]) break;
                M[a][(a - d + 25) % 26] = acc;
            }
        }
        res += M[a][b];
    }
    return res;
}
