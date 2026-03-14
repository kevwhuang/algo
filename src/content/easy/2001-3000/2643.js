// 2643 - Row With Maximum Ones

function rowAndMaximumOnes(mat) {
    let row = 0, max = 0;
    for (let i = 0; i < mat.length; i++) {
        const cur = mat[i];
        let count = 0;
        for (let j = 0; j < cur.length; j++) {
            if (cur[j]) count++;
        }
        if (count <= max) continue;
        row = i, max = count;
    }
    return [row, max];
}
