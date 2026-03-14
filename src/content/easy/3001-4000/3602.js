// 3602 - Hexadecimal and Hexatrigesimal Conversion

function concatHex36(n) {
    return ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase();
}
