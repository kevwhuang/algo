// 2417 - Closest Fair Integer

function closestFair(n) {
    const obj = { 1: 10, 3: 1001, 5: 100011, 7: 10000111, 9: 1000001111 };
    let digits = 0, num = n;
    while (num) {
        digits++;
        num = num / 10 >> 0;
    }
    if (obj[digits]) return obj[digits];
    const bound = Number('9'.repeat(digits));
    while (true) {
        if (n === bound) return obj[digits + 1];
        let even = 0, odd = 0, num = n;
        while (num) {
            num % 2 ? odd++ : even++;
            num = num / 10 >> 0;
        }
        if (even === odd) return n;
        n++;
    }
}
