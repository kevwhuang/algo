// 2064 - Minimized Maximum of Products Distributed to Any Store

function minimizedMaximum(n, quantities) {
    let min, l = 1, r = Math.max(...quantities);
    while (l <= r) {
        const m = l + r >> 1;
        let need = 0;
        for (let i = 0; i < quantities.length; i++) {
            need += Math.ceil(quantities[i] / m);
        }
        if (need <= n) r = (min = m) - 1;
        else l = m + 1;
    }
    return min;
}
