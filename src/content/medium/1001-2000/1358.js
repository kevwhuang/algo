// 1358 - Number of Substrings Containing All Three Characters

function numberOfSubstrings(s) {
    let substrings = 0;
    let a = 0, b = 0, c = 0;
    for (let l = 0, r = 0, len = s.length; r < len; r++) {
        if (s[r] === 'a') a++;
        else if (s[r] === 'b') b++;
        else c++;
        while (a && b && c) {
            substrings += len - r;
            if (s[l] === 'a') a--;
            else if (s[l] === 'b') b--;
            else c--;
            l++;
        }
    }
    return substrings;
}
