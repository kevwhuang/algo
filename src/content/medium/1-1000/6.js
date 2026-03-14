// 6 - Zigzag Conversion

function convert(s, numRows) {
    if (numRows === 1) return s;
    const zigzag = new Array(numRows).fill('');
    let row = 0, down = true;
    for (let i = 0; i < s.length; i++) {
        zigzag[row] += s[i];
        down ? row++ : row--;
        (row === numRows - 1 || !row) && (down = !down);
    }
    return zigzag.join('');
}
