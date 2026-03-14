// 2133 - Check If Every Row and Column Contains All Numbers

function checkValid(matrix) {
    const m = matrix.length, n = matrix[0].length;
    for (let r = 0; r < m; r++) {
        const set = new Set(matrix[r]);
        if (set.size !== m) return false;
    }
    for (let c = 0; c < n; c++) {
        const set = new Set();
        for (let r = 0; r < m; r++) {
            set.add(matrix[r][c]);
        }
        if (set.size !== n) return false;
    }
    return true;
}
