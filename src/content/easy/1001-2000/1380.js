// 1380 - Lucky Numbers in a Matrix

function luckyNumbers(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const maxColumn = new Array(n);
    for (let c = 0; c < n; c++) {
        let max = 0;
        for (let r = 0; r < m; r++) {
            max = Math.max(matrix[r][c], max);
        }
        maxColumn[c] = max;
    }
    const luckyNumbers = [];
    for (let r = 0; r < m; r++) {
        let index = 0, min = matrix[r][0];
        for (let c = 1; c < n; c++) {
            if (matrix[r][c] >= min) continue;
            index = c;
            min = matrix[r][c];
        }
        if (matrix[r][index] === maxColumn[index]) {
            luckyNumbers.push(matrix[r][index]);
        }
    }
    return luckyNumbers;
}
