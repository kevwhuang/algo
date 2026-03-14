// 2523 - Closest Prime Numbers in Range

function closestPrimes(left, right) {
    function isPrime(num) {
        if (num === 2) return true;
        if (num === 1 || num % 2 === 0) return false;
        const sqrt = Math.sqrt(num);
        for (let n = 3; n <= sqrt; n += 2) {
            if (num % n === 0) return false;
        }
        return true;
    }
    let prev;
    if (left === 1) left++;
    if (left === 2) left++ && (prev = 2);
    if (left % 2 === 0) left++;
    const pair = [-1, -1];
    for (let n = left, min = Infinity; n <= right; n += 2) {
        if (!isPrime(n)) continue;
        if (!prev && (prev = n)) continue;
        const delta = n - prev;
        if (delta < 3) return [prev, n];
        if (delta >= min && (prev = n)) continue;
        pair[0] = prev, pair[1] = prev = n, min = delta;
    }
    return pair;
}
