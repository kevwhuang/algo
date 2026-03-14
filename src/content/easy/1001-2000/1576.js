// 1576 - Replace All ?'s to Avoid Consecutive Repeating Characters

function modifyString(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '?') res += s[i];
        if (s[i] !== '?') continue;
        const veto = [];
        if (i) veto.push(res.charCodeAt(i - 1));
        if (i + 1 < s.length) veto.push(s.charCodeAt(i + 1));
        for (let code = 97; code <= 122; code++) {
            if (veto.includes(code)) continue;
            res += String.fromCharCode(code);
            break;
        }
    }
    return res;
}
