// 1253 - Reconstruct a 2-Row Binary Matrix

function reconstructMatrix(upper, lower, colsum) {
    const row1 = new Array(colsum.length);
    const row2 = new Array(colsum.length);
    let ones = 0;
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 0) row1[i] = row2[i] = 0;
        else if (colsum[i] === 1) ones++;
        else {
            row1[i] = row2[i] = 1;
            upper--; lower--;
        }
    }
    if (upper < 0 || lower < 0 || ones !== (upper + lower)) return [];
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] !== 1) continue;
        if (upper) {
            row1[i] = 1;
            row2[i] = 0;
            upper--;
        } else {
            row1[i] = 0;
            row2[i] = 1;
        }
    }
    return [row1, row2];
}
