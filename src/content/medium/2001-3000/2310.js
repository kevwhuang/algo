// 2310 - Sum of Numbers With Units Digit K

function minimumNumbers(num, k) {
    if (num === 0) return 0;
    const digit = num % 10;
    for (let n = 1; n <= 10; n++) {
        if (n * k % 10 === digit && n * k <= num) return n;
    }
    return -1;
}
