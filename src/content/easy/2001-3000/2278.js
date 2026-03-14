// 2278 - Percentage of Letter in String

function percentageLetter(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) count++;
    }
    return 100 * count / s.length >> 0;
}
