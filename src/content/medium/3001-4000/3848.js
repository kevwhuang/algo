// 3848 - Check Digitorial Permutation

function isDigitorialPermutation(n) {
    if (!this.dict) dict = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    const B = new Int8Array(10);
    let sum = 0, cur = n;
    while (n) sum += dict[n % 10], n = n / 10 >> 0;
    while (cur) B[cur % 10]++, cur = cur / 10 >> 0;
    while (sum) B[sum % 10]--, sum = sum / 10 >> 0;
    return B.every(e => e === 0);
}
