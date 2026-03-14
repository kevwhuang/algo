// 909 - Snakes and Ladders

function snakesAndLadders(board) {
    function boustrophedon(roll) {
        const r = roll / n >> 0, c = roll % n;
        return [n - r - 1, r & 1 ? n - c - 1 : c];
    }
    const M = board, n = M.length, nn = n * n;
    let acc = 0, Q = [1];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const cur = Q[i];
            if (cur === nn) return acc;
            const min = Math.min(cur + 6, nn);
            for (let roll = cur + 1; roll <= min; roll++) {
                const [r, c] = boustrophedon(roll - 1);
                if (M[r][c] === 0) continue;
                N.push(M[r][c] === -1 ? roll : M[r][c]);
                M[r][c] = 0;
            }
        }
        acc++, Q = N;
    }
    return -1;
}
