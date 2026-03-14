// 773 - Sliding Puzzle

function slidingPuzzle(board) {
    let res = 1, Q = [board[0].concat(board[1])];
    const seen = new Set([Q[0].join``]);
    if (seen.has('123450')) return 0;
    const dict = { 0: [1, 3], 1: [0, 2, 4], 2: [1, 5] };
    dict[3] = [0, 4], dict[4] = [1, 3, 5], dict[5] = [2, 4];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const idx = Q[i].indexOf(0), D = dict[idx];
            for (let j = 0; j < D.length; j++) {
                const next = [...Q[i]];
                next[idx] = next[D[j]], next[D[j]] = 0;
                const key = next.join``;
                if (key === '123450') return res;
                if (seen.has(key)) continue;
                seen.add(key);
                N.push(next);
            }
        }
        res++, Q = N;
    }
    return -1;
}
