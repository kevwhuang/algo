// 3007 - Maximum Number That Sum of the Prices Is Less Than or Equal to K

function findMaximumNumber(k, x) {
    let l = 1, r = 1e15;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        let count = 0, size = 1, bit = 0;
        while (size *= 2) {
            if (++bit % x) continue;
            const groups = (m + 1) / size, full = Math.floor(groups);
            count += full * size / 2 + Math.max(0, groups - full - .5) * size;
            if (groups <= 1) break;
        }
        if (count <= k) l = m + 1;
        else r = m;
    }
    return l - 1;
}
