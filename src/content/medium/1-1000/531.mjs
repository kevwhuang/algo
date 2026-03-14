// 531 - Lonely Pixel I

function findLonelyPixel(picture) {
    const m = picture.length, n = picture[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (picture[r][c] === 'W') continue;
            rows[r]++;
            cols[c]++;
        }
    }
    let pixels = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (picture[r][c] === 'W') continue;
            if (rows[r] === 1 && cols[c] === 1) pixels++;
        }
    }
    return pixels;
}
