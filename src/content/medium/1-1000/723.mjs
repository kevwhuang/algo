// 723 - Candy Crush

function candyCrush(board) {
    const M = board, m = M.length, n = M[0].length;
    while (true) {
        let flag;
        for (let r = 0; r < m; r++) {
            let c = 0;
            while (c < n - 2) {
                const cur = M[r][c];
                if (cur === 0 && ++c) continue;
                const a = M[r][c + 1], b = M[r][c + 2];
                if ((a !== cur || b !== cur) && ++c) continue;
                while (c < n && M[r][c] === cur) M[r][c++] = -cur;
                flag = true;
            }
        }
        for (let c = 0; c < n; c++) {
            let r = 0;
            while (r < m - 2) {
                const cur = Math.abs(M[r][c]);
                if (cur === 0 && ++r) continue;
                const a = Math.abs(M[r + 1][c]), b = Math.abs(M[r + 2][c]);
                if ((a !== cur || b !== cur) && ++r) continue;
                while (r < m && Math.abs(M[r][c]) === cur) M[r++][c] = -cur;
                flag = true;
            }
        }
        if (!flag) return M;
        for (let c = 0; c < n; c++) {
            for (let r = m - 1, rr = m - 1; ~r; r--) {
                if (M[r][c] <= 0) M[r][c] = 0;
                else ([M[r][c], M[rr--][c]] = [M[rr][c], M[r][c]]);
            }
        }
    }
}
