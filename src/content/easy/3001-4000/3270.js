// 3270 - Find the Key of the Numbers

function generateKey(num1, num2, num3) {
    let key = 0;
    for (let n = 0; n <= 3; n++) {
        const min = Math.min(num1 % 10, num2 % 10, num3 % 10);
        key += min * Math.pow(10, n);
        num1 = num1 / 10 >> 0;
        num2 = num2 / 10 >> 0;
        num3 = num3 / 10 >> 0;
    }
    return key;
}
