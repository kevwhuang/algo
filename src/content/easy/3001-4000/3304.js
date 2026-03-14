// 3304 - Find the Kth Character in String Game I

function kthCharacter(k) {
    let ops = 0, n = 1 + Math.log2(k) >> 0;
    while (~--n) if (k > 2 ** n) ops++, k -= 2 ** n;
    return String.fromCharCode(97 + ops % 26);
}
