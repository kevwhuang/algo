// 1861 - Rotating the Box

function rotateTheBox(box) {
    const m = box[0].length, n = box.length;
    const res = new Array(m);
    for (let r = 0; r < m; r++) {
        res[r] = new Array(n).fill('.');
    }
    for (let c = 0; c < n; c++) {
        let ins = m - 1;
        for (let r = m - 1; r >= 0; r--) {
            if (box[c][r] === '#') {
                res[ins--][n - c - 1] = '#';
            } else if (box[c][r] === '*') {
                res[r][n - c - 1] = '*';
                ins = r - 1;
            }
        }
    }
    return res;
}
