// 3908. Valid Digit Number

function validDigit(n, x) {
    let res = false;
    while (n) {
        if (n % 10 === x) res = true;
        if (n % 10 === x && n / 10 < 1) res = false;
        n = n / 10 | 0;
    }
    return res;
}
