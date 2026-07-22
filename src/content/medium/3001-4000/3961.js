// 3961. Maximize Sum of Device Ratings

function maxRatings(units) {
    let res = 0, min1 = 1e6, min2 = 1e6;
    const M = units, m = M.length, n = M[0].length;
    for (let x = 0; x < m; x++) {
        let a = M[x][0], b = 1e6;
        for (let y = 1; y < n; y++) {
            const cur = M[x][y];
            if (cur < a) b = a, a = cur;
            else if (cur < b) b = cur;
        }
        if (b === 1e6) b = a;
        res += b, min1 = Math.min(a, min1), min2 = Math.min(b, min2);
    }
    return res + min1 - min2;
}
