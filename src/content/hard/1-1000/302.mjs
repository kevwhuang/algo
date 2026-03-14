// 302 - Smallest Rectangle Enclosing Black Pixels

function minArea(image, x, y) {
    function find(l, r, fn) {
        while (l < r) {
            const m = l + r >> 1;
            if (fn(m)) l = m + 1;
            else r = m;
        }
        return l;
    }
    const fn1 = r => image[r].includes('1');
    const fn2 = c => image.some(e => e[c] === '1');
    const up = find(0, x, r => !image[r].includes('1'));
    let down = find(x, image.length - 1, fn1);
    if (!fn1(down)) down--;
    const left = find(0, y, c => !image.some(e => e[c] === '1'));
    let right = find(y, image[0].length - 1, fn2);
    if (!fn2(right)) right--;
    return (down - up + 1) * (right - left + 1);
}
