// 970 - Powerful Integers

function powerfulIntegers(x, y, bound) {
    const set = new Set();
    let xx = 1;
    while (xx <= bound) {
        let yy = 1;
        while (xx + yy <= bound) {
            set.add(xx + yy);
            yy *= y;
            if (yy === 1) break;
        }
        xx *= x;
        if (xx === 1) break;
    }
    return Array.from(set);
}
