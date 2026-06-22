// 3959. Check Good Integer

function checkGoodInteger(n) {
    let acc1 = 0, acc2 = 0;
    while (n) {
        acc1 += (n % 10) ** 2;
        acc2 += n % 10;
        n = n / 10 | 0;
    }
    return acc1 - acc2 >= 50;
}
