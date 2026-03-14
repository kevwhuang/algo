// 2443 - Sum of Number and Its Reverse

function sumOfNumberAndReverse(num) {
    if (num === 0) return true;
    const bound = num / 2 >> 0;
    for (let n = num - 1; n >= bound; n--) {
        let rvs = 0, number = n;
        while (number) {
            rvs = rvs * 10 + number % 10;
            number = Math.trunc(number / 10);
        }
        if (n + rvs === num) return true;
    }
    return false;
}
