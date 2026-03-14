// 1317 - Convert Integer to the Sum of Two No-Zero Integers

function getNoZeroIntegers(n) {
    function checkNZI(num) {
        while (num) {
            if (num % 10 === 0) return false;
            num = ~~(num / 10);
        }
        return true;
    }
    let i = 0;
    while (++i) {
        if (checkNZI(i) && checkNZI(n - i)) return [i, n - i];
    }
}
