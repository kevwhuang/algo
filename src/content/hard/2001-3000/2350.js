// 2350 - Shortest Impossible Sequence of Rolls

function shortestSequence(rolls, k) {
    let res = 1, acc = 0, i = -1;
    const B = new Uint32Array(k + 1);
    while (++i < rolls.length) {
        if (B[rolls[i]] >= res) continue;
        B[rolls[i]] = res;
        if (++acc === k) res++, acc = 0;
    }
    return res;
}
