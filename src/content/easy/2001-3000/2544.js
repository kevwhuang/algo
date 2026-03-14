// 2544 - Alternating Digit Sum

function alternateDigitSum(n) {
    n = n.toString();
    let sum = 0, isPositive = true;
    for (let i = 0; i < n.length; i++) {
        if (isPositive) sum += Number(n[i]);
        else sum -= Number(n[i]);
        isPositive = !isPositive;
    }
    return sum;
}
