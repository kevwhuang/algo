// 2825 - Make String a Subsequence Using Cyclic Increments

function canMakeSubsequence(str1, str2) {
    let i = -1, j = -1;
    L: while (++j < str2.length) {
        const code = str2.charCodeAt(j) - 1;
        const char = code === 96 ? 'z' : String.fromCharCode(code);
        while (++i < str1.length) {
            if (str1[i] === str2[j] || str1[i] === char) continue L;
        }
        return false;
    }
    return true;
}
