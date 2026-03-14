// 473 - Matchsticks to Square

function makesquare(matchsticks) {
    function backtrack(i) {
        if (i === -1) return true;
        for (let j = 0; j < 4; j++) {
            if (j && square[j - 1] === square[j]) continue;
            const len = matchsticks[i];
            if (square[j] + len > tgt) continue;
            square[j] += len;
            if (backtrack(i - 1)) return true;
            square[j] -= len;
        }
        return false;
    }
    const n = matchsticks.length;
    if (n < 4) return false;
    const tgt = matchsticks.reduce((s, e) => s + e) / 4;
    if (!Number.isInteger(tgt)) return false;
    matchsticks = new Uint32Array(matchsticks).sort();
    const square = [0, 0, 0, 0];
    return backtrack(n - 1);
}
