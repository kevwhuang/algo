// 1750 - Minimum Length of String After Deleting Similar Ends

function minimumLength(s) {
    let l = 0, r = s.length - 1;
    while (l < s.length && r >= 0 && s[l] === s[r]) {
        if (l === r) return 1;
        const char = s[l];
        while (s[l] === char) l++;
        if (l > r) return 0;
        while (s[r] === char) r--;
    }
    return r - l + 1;
}
