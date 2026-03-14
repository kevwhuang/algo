// 3726 - Remove Zeros in Decimal Representation

function removeZeros(n) {
    return Number(String(n).split``.filter(e => e > '0').join``);
}
