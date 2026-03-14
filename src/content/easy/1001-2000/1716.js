// 1716 - Calculate Money in LeetCode Bank

function totalMoney(n) {
    let sum = 0;
    const weeks = n / 7 >> 0;
    for (let i = 1; i <= weeks; i++) {
        sum += (i + i + 6) * 3.5;
    }
    const days = n % 7;
    return sum + (weeks + weeks + days + 1) * days / 2;
}
