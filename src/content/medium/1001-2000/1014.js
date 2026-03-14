// 1014 - Best Sightseeing Pair

function maxScoreSightseeingPair(values) {
    let res = 0, l = 0, r = 0;
    while (++r < values.length) {
        const a = values[l] + l - r, b = values[r - 1] - 1;
        res = Math.max(values[r] + Math.max(a, b), res);
        if (a < b) l = r - 1;
    }
    return res;
}
