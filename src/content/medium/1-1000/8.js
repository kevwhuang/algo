// 8 - String to Integer (atoi)

function myAtoi(s) {
    s = parseInt(s) || 0;
    if (s > 2147483647) return 2147483647;
    if (s < -2147483648) return -2147483648;
    return s;
}
