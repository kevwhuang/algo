// 2397 - Maximum Rows Covered by Columns

function maximumRows(matrix, numSelect) {
    function backtrack(cols) {
        if (cols.length === numSelect) return check(cols);
        for (let c = cols.at(-1) + 1; c < n; c++) {
            cols.push(c);
            backtrack(cols);
            cols.pop();
        }
    }
    function check(cols) {
        const bucket = [...arr];
        for (let r = 0; r < m; r++) {
            for (let i = 0; i < cols.length; i++) {
                if (matrix[r][cols[i]]) bucket[r]--;
            }
        }
        let covered = 0;
        for (let r = 0; r < m; r++) {
            if (bucket[r] === 0) covered++;
        }
        max = Math.max(covered, max);
    }
    const m = matrix.length, n = matrix[0].length;
    const arr = new Array(m).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c]) arr[r]++;
        }
    }
    let max = 0;
    for (let c = 0; c < n; c++) {
        backtrack([c]);
    }
    return max;
}
