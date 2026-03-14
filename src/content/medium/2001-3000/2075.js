// 2075 - Decode the Slanted Ciphertext

function decodeCiphertext(encodedText, rows) {
    const res = [];
    const len = encodedText.length, cols = len / rows;
    let i = 0, c = 0;
    while (c < cols) {
        res.push(encodedText.charAt(i));
        i += cols + 1;
        if (i >= len) i = ++c;
    }
    while (res[res.length - 1] === ' ') res.pop();
    return res.join('');
}
