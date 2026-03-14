// 3014 - Minimum Number of Pushes to Type Word I

function minimumPushes(word) {
    let res = 0, d = 1, i = -1;
    while (++i < word.length) res += d, d += (i + 1) % 8 === 0;
    return res;
}
