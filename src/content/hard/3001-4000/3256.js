// 3256 - Maximum Value Sum by Placing Three Rooks I

function maximumValueSum(board) {
    const set = new Set(), A = [], M = board, m = M.length, n = M[0].length;
    for (let x = 0; x < m; x++) {
        let a = -1, b = -1, c = -1;
        for (let y = 0; y < n; y++) {
            const cur = M[x][y], key = n * x + y;
            if (a < 0 || M[a / n | 0][a % n] <= cur) c = b, b = a, a = key;
            else if (b < 0 || M[b / n | 0][b % n] <= cur) c = b, b = key;
            else if (c < 0 || M[c / n | 0][c % n] <= cur) c = key;
        }
        set.add(a).add(b).add(c);
    }
    for (let y = 0; y < n; y++) {
        let a = -1, b = -1, c = -1;
        for (let x = 0; x < m; x++) {
            const cur = M[x][y], key = n * x + y;
            if (a < 0 || M[a / n | 0][a % n] <= cur) c = b, b = a, a = key;
            else if (b < 0 || M[b / n | 0][b % n] <= cur) c = b, b = key;
            else if (c < 0 || M[c / n | 0][c % n] <= cur) c = key;
        }
        if (set.has(a)) A.push(a);
        if (set.has(b)) A.push(b);
        if (set.has(c)) A.push(c);
    }
    A.sort((a, b) => M[b / n | 0][b % n] - M[a / n | 0][a % n]);
    let res = -Infinity;
    const min = Math.min(11, A.length);
    for (let i = 0; i < min; i++) {
        for (let j = i + 1; j < min; j++) {
            for (let k = j + 1; k < min; k++) {
                const x1 = A[i] / n | 0, y1 = A[i] % n;
                const x2 = A[j] / n | 0, y2 = A[j] % n;
                const x3 = A[k] / n | 0, y3 = A[k] % n;
                if (x1 === x2 || x1 === x3 || x2 === x3) continue;
                if (y1 === y2 || y1 === y3 || y2 === y3) continue;
                res = Math.max(M[x1][y1] + M[x2][y2] + M[x3][y3], res);
            }
        }
    }
    return res;
}
