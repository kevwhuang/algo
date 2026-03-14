// 3000 - Maximum Area of Longest Diagonal Rectangle

function areaOfMaxDiagonal(dimensions) {
    let max = 0, maxDiag = 0;
    for (let i = 0; i < dimensions.length; i++) {
        const a = dimensions[i][0], b = dimensions[i][1];
        const diag = a * a + b * b;
        if (diag < maxDiag) continue;
        if (diag > maxDiag) max = a * b;
        else max = Math.max(a * b, max);
        maxDiag = diag;
    }
    return max;
}
