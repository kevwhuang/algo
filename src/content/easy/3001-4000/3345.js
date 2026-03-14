// 3345 - Smallest Divisible Digit Product I

function smallestNumber(n, t) {
    while (true) {
        let prod = 1, cur = n;
        while (cur) prod *= cur % 10, cur = cur / 10 >> 0;
        if (prod % t === 0) return n;
        n++;
    }
}
