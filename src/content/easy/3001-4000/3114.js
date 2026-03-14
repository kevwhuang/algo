// 3114 - Latest Time You Can Obtain After Replacing Characters

function findLatestTime(s) {
    s = s.split('');
    if (s[0] === '?' && s[1] === '?') s[0] = s[1] = '1';
    else if (s[0] === '?') s[0] = s[1] <= 1 ? '1' : '0';
    else if (s[1] === '?') s[1] = s[0] === '0' ? '9' : '1';
    if (s[3] === '?') s[3] = '5';
    if (s[4] === '?') s[4] = '9';
    return s.join('');
}
