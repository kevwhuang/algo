// 2120 - Execution of All Suffix Instructions Staying in a Grid

function executeInstructions(n, startPos, s) {
    const m = s.length, res = new Uint16Array(m);
    for (let i = 0; i < m; i++) {
        let r = startPos[0], c = startPos[1];
        for (let j = i; j < m; j++) {
            if (s[j] === 'U') r--;
            else if (s[j] === 'D') r++;
            else s[j] === 'L' ? c-- : c++;
            if (r === -1 || r === n || c === -1 || c === n) break;
            res[i]++;
        }
    }
    return res;
}
