// 591 - Tag Validator

function isValid(code) {
    const S = [], n = code.length;
    let flag, idx, i = 0;
    while (i < n) {
        if (code[i] !== '<') {
            if (!flag) return false;
            i++;
        } else if (i + 1 < n && code[i + 1] === '!') {
            idx = code.indexOf('[CDATA[', i + 2);
            if (idx <= 2) return false;
            idx = code.indexOf(']]>', idx + 7);
            if (idx === -1 || idx === n - 3) return false;
            i = idx + 3;
        } else if (i + 1 < n && code[i + 1] === '/') {
            idx = code.indexOf('>', i + 2);
            if (idx === -1) return false;
            if (idx !== n - 1 && S.length === 1) return false;
            if (code.slice(i + 2, idx) !== S.pop()) return false;
            i = idx + 1;
        } else {
            idx = code.indexOf('>', i + 1);
            if (idx === -1) return false;
            const s = code.slice(i + 1, idx);
            if (!/^[A-Z]{1,9}$/.test(s)) return false;
            S.push(s);
            flag = true, i = idx + 1;
        }
    }
    return S.length === 0;
}
