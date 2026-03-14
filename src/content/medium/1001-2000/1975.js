// 1975 - Maximum Matrix Sum

function maxMatrixSum(matrix) {
    let sum = 0, min = 1e5, odds = 0;
    for (let r = 0; r < matrix.length; r++) {
        let negatives = 0;
        for (let c = 0; c < matrix.length; c++) {
            const abs = Math.abs(matrix[r][c]);
            sum += abs;
            min = Math.min(abs, min);
            if (matrix[r][c] < 0) negatives++;
        }
        if (negatives % 2) odds++;
    }
    return odds % 2 ? sum - min - min : sum;
}
