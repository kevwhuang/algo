// 1952 - Three Divisors

function isThree(n) {
    let divisors = 2;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) divisors++;
        if (divisors > 3) return false;
    }
    return divisors === 3;
}
