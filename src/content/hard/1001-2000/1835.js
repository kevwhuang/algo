// 1835 - Find XOR Sum of All Pairs Bitwise AND

function getXORSum(arr1, arr2) {
    return arr1.reduce((s, e) => s ^ e) & arr2.reduce((s, e) => s ^ e);
}
