// 1134 - Armstrong Number

function isArmstrong(n) {
    let exp = 0, cur = n;
    while (cur) exp++, cur = cur / 10 >> 0;
    cur = n;
    let sum = 0;
    while (cur) sum += (cur % 10) ** exp, cur = cur / 10 >> 0;
    return sum === n;
}
