// 351 - Android Unlock Patterns

function numberOfPatterns(m, n) {
    const arr = [0, 9, 65, 385, 2009, 9161, 35177, 108089, 248793, 389497];
    return arr[n] - arr[m - 1];
}
