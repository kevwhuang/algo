// 2457 - Minimum Addition to Make Integer Beautiful

function makeIntegerBeautiful(n, target) {
    function sumOfDigits(num) {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    const start = n;
    let k = 10;
    while (sumOfDigits(n) > target) {
        n += k - n % k;
        k *= 10;
    }
    return n - start;
}
