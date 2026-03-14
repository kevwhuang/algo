// 1844 - Replace All Digits With Characters

function replaceDigits(s) {
    let res = '';
    for (let i = 1; i < s.length; i += 2) {
        const code = s.charCodeAt(i - 1) + Number(s[i]);
        res += s[i - 1] + String.fromCharCode(code);
    }
    return s.length % 2 ? res + s.at(-1) : res;
}
