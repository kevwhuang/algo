// 120 - Triangle

function minimumTotal(triangle) {
    for (let r = triangle.length - 2; r >= 0; r--) {
        for (let c = 0; c <= r; c++) {
            const left = triangle[r + 1][c];
            const right = triangle[r + 1][c + 1];
            triangle[r][c] += Math.min(left, right);
        }
    }
    return triangle[0][0];
}
