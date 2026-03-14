// 779 - Kth Symbol in Grammar

function kthGrammar(n, k) {
    k--;
    let ones = 0;
    while (k) {
        if (k & 1) ones++;
        k >>= 1;
    }
    return ones & 1;
}
