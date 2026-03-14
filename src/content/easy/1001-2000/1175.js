// 1175 - Prime Arrangements

function numPrimeArrangements(n) {
    if (n <= 2) return 1;
    const dict = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    dict.push(41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97);
    let i = 0;
    while (i < 25 && dict[i] <= n) i++;
    let res = 1, j = 2;
    while (j <= i) res = j++ * res % 1000000007;
    j = 2;
    while (j <= n - i) res = j++ * res % 1000000007;
    return res;
}
