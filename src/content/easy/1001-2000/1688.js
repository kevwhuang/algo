// 1688 - Count of Matches in Tournament

function numberOfMatches(n) {
    let matches = 0;
    while (n > 1) {
        if (n % 2 === 0) matches += n /= 2;
        else n >>= 1, matches += n + 1;
    }
    return matches;
}
