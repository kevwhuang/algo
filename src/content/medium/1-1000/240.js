// 240 - Search a 2D Matrix II

function searchMatrix(matrix, target) {
    const len = matrix.length;
    for (let n = 0; n < len; n++) {
        const row = matrix.shift();
        let l = 0, r = row.length - 1;
        while (l <= r) {
            const m = (l + r) / 2 >> 0;
            if (row[m] < target) l = m + 1;
            else if (row[m] > target) r = m - 1;
            else return true;
        }
    }
    return false;
}
