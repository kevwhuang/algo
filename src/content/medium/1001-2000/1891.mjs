// 1891 - Cutting Ribbons

function maxLength(ribbons, k) {
    const sum = ribbons.reduce((s, e) => s + e);
    let l = 1, r = sum / k >> 0;
    while (l <= r) {
        const m = l + r >> 1;
        let count = 0;
        for (let i = 0; i < ribbons.length; i++) {
            count += ribbons[i] / m >> 0;
        }
        if (count >= k) l = m + 1;
        else r = m - 1;
    }
    return r;
}
