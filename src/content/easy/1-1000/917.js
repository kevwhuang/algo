// 917 - Reverse Only Letters

function reverseOnlyLetters(s) {
    s = s.split('');
    let l = 0, r = s.length - 1;
    while (true) {
        while (s[l] < 'A' || ('Z' < s[l] && s[l] < 'a') || s[l] > 'z') {
            if (l === s.length) break;
            l++;
        }
        while (s[r] < 'A' || ('Z' < s[r] && s[r] < 'a') || s[r] > 'z') {
            if (r === 0) break;
            r--;
        }
        if (l >= r) break;
        [s[l++], s[r--]] = [s[r], s[l]];
        if (l >= r) break;
    }
    return s.join('');
}
