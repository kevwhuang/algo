// 1513 - Number of Substrings With Only 1's

function numSub(s) {
    let substrings = 0, local = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '0') local = 0;
        else substrings += ++local;
    }
    return substrings % (1e9 + 7);
}
