// 3827 - Count Monobit Integers

function countMonobit(n) {
    if (!this.dict) dict = [null, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1001];
    let i = 0;
    while (++i) if (n < dict[i]) return i;
}
