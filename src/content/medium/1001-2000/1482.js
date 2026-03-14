// 1482 - Minimum Number of Days to Make M Bouquets

function minDays(bloomDay, m, k) {
    let min = -1, l = 1, r = 1e9;
    while (l <= r) {
        const tgt = l + r >> 1;
        let bouquets = 0, flowers = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= tgt) {
                if (++flowers !== k) continue;
                if (++bouquets === m) break;
            }
            flowers = 0;
        }
        if (bouquets !== m) l = tgt + 1;
        else r = (min = tgt) - 1;
    }
    return min;
}
