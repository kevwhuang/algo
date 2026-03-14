// 1011 - Capacity to Ship Packages Within D Days

function shipWithinDays(weights, days) {
    let l = 0, r = 0;
    for (let i = 0; i < weights.length; i++) {
        l = Math.max(weights[i], l);
        r += weights[i];
    }
    while (l < r) {
        const m = l + r >> 1;
        let count = 1, cur = 0;
        for (let i = 0; i < weights.length; i++) {
            cur += weights[i];
            if (cur <= m) continue;
            count++;
            cur = weights[i];
        }
        if (count > days) l = m + 1;
        else r = m;
    }
    return r;
}
