// 3096 - Minimum Levels to Gain More Points

function minimumLevels(possible) {
    possible[0] ||= -1;
    for (let i = 1; i < possible.length; i++) {
        possible[i] = possible[i - 1] + (possible[i] || -1);
    }
    const bound = possible.length - 1, sum = possible[bound];
    for (let i = 0; i < bound; i++) {
        if (2 * possible[i] > sum) return i + 1;
    }
    return -1;
}
