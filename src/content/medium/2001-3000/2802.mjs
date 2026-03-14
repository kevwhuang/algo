// 2802 - Find the Kth Lucky Number

function kthLuckyNumber(k) {
    k = (k + 1).toString(2).slice(1);
    return k.replaceAll('0', '4').replaceAll('1', '7');
}
