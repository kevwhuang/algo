// 661 - Image Smoother

function imageSmoother(img) {
    function smooth(r, c) {
        let total = 0, cells = 0;
        for (let dr = r - 1; dr <= r + 1; dr++) {
            if (dr < 0 || dr >= m) continue;
            for (let dc = c - 1; dc <= c + 1; dc++) {
                if (dc < 0 || dc >= n) continue;
                total += img[dr][dc];
                cells++;
            }
        }
        return Math.floor(total / cells);
    }
    const m = img.length, n = img[0].length;
    const res = [];
    for (let r = 0; r < m; r++) {
        const row = [];
        for (let c = 0; c < n; c++) {
            row.push(smooth(r, c));
        }
        res.push(row);
    }
    return res;
}
