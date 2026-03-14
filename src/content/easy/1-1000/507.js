// 507 - Perfect Number

function checkPerfectNumber(num) {
    if (num % 2) return false;
    let sum = 1;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) sum += i + num / i;
    }
    return num === sum;
}
