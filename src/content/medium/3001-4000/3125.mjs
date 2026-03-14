// 3125 - Maximum Number That Makes Result of Bitwise AND Zero

function maxNumber(n) {
    return 2 ** (Math.log2(n) >> 0) - 1;
}
