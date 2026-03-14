// 3099 - Harshad Number

function sumOfTheDigitsOfHarshadNumber(x) {
    let sum = 0, cur = x;
    while (cur) sum += cur % 10, cur = cur / 10 >> 0;
    return x % sum ? -1 : sum;
}
