// 829 - Consecutive Numbers Sum

function consecutiveNumbersSum(n) {
    let res = 0, acc = 1, i = 1;
    while (acc <= n) res += (n - acc) % i === 0, acc += ++i;
    return res;
}
