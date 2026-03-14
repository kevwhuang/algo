// 533 - Lonely Pixel II

function findBlackPixel(picture, target) {
    const m = picture.length, n = picture[0].length;
    const rows = new Array(m);
    const rowCounts = new Array(m).fill(0);
    const colIndexes = Array.from({ length: n }, () => []);
    for (let r = 0; r < m; r++) {
        let row = '';
        for (let c = 0; c < n; c++) {
            row += picture[r][c];
            if (picture[r][c] === 'W') continue;
            rowCounts[r]++;
            colIndexes[c].push(r);
        }
        rows[r] = row;
    }
    let count = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (picture[r][c] === 'W') continue;
            if (rowCounts[r] !== target) continue;
            if (colIndexes[c].length !== target) continue;
            let isLonely = true;
            const col = colIndexes[c];
            for (let i = 0; i < col.length; i++) {
                if (rows[r] !== rows[col[i]]) isLonely = false;
                picture[col[i]][c] = 'W';
            }
            if (isLonely) count += col.length;
        }
    }
    return count;
}
