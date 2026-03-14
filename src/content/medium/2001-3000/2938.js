// 2938 - Separate Black and White Balls

function minimumSteps(s) {
    let swaps = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (s[j] === '0') swaps += j - i++;
    }
    return swaps;
}
