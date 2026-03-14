// 3572 - Maximize Y-Sum by Picking a Triplet of Distinct X-Values

function maxSumDistinctTriplet(x, y) {
    let a = 0, b = 0, c = 0, aa = 0, bb = 0, cc = 0, i = -1;
    while (++i < x.length) {
        const d = x[i], e = y[i];
        if (d === aa) a = Math.max(e, a);
        else if (d === bb) b = Math.max(e, b);
        else if (d === cc) c = Math.max(e, c);
        else if (e > a || e > b || e > c) {
            const min = Math.min(a, b, c);
            if (min === a) a = e, aa = d;
            else if (min === b) b = e, bb = d;
            else c = e, cc = d;
        }
    }
    return a && b && c ? a + b + c : -1;
}
