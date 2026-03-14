// 3453 - Separate Squares I

function separateSquares(squares) {
    let l = .5, r = squares.reduce((s, e) => Math.max(e[1] + e[2] / 2, s), 0);
    while (l < r) {
        let acc1 = 0, acc2 = 0, i = -1;
        const m = (l + r) / 2;
        while (++i < squares.length) {
            const a = squares[i][1], b = squares[i][2], c = b * b;
            if (m > a + b) acc1 += c;
            else if (m < a) acc2 += c;
            else acc1 += (m - a) / b * c, acc2 += (a + b - m) / b * c;
        }
        if (acc1 < acc2) l = m + .00001;
        else r = m - .00001;
    }
    return l;
}
