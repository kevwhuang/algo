// 875 - Koko Eating Bananas

function minEatingSpeed(piles, h) {
    let l = 1, r = piles.reduce((s, e) => Math.max(e, s));
    while (l < r) {
        let acc = 0;
        const m = l + r >> 1;
        for (let i = 0; acc <= h && i < piles.length; i++) {
            acc += Math.ceil(piles[i] / m);
        }
        if (acc > h) l = m + 1;
        else r = m;
    }
    return l;
}
