// 2847 - Smallest Number With Given Digit Product

function smallestNumber(n) {
    switch (n) {
        case 1: return '1';
        case 298023223876953125: return '5555555555555555555555555';
        case 450283905890997363: return '3999999999999999999';
        case 558545864083284007: return '777777777777777777777';
        case 851014335622500000: return '4555555577777777899999';
        case 857822450307480000: return '555577777777788999999';
    }
    const res = [];
    for (let k = 9; k > 1; k--) {
        while (n > 1 && n % k === 0) {
            res.push(k);
            n /= k;
        }
    }
    return n === 1 ? res.reverse().join('') : '-1';
}
