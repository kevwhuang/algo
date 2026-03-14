// 1221 - Split a String in Balanced Strings

function balancedStringSplit(s) {
    let count = 0, acc = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? acc++ : acc--;
        if (acc === 0) count++;
    }
    return count;
}
