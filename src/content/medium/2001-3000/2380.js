// 2380 - Time Needed to Rearrange a Binary String

function secondsToRemoveOccurrences(s) {
    let res = 0, acc = 0, i = -1;
    while (++i < s.length) {
        if (s[i] === '0') acc++;
        else if (acc) res = Math.max(acc, res + 1);
    }
    return res;
}
