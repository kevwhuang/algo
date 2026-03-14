// 2486 - Append Characters to String to Make Subsequence

function appendCharacters(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i++] === t[j]) j++;
    }
    return t.length - j;
}
