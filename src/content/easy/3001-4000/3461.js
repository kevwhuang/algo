// 3461 - Check If Digits Are Equal in String After Operations I

function hasSameDigits(s) {
    const res = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
        res[i] = Number(s[i]);
    }
    for (let tgt = s.length; tgt > 2; tgt--) {
        for (let i = 1; i < tgt; i++) {
            res[i - 1] = (res[i - 1] + res[i]) % 10;
        }
    }
    return res[0] === res[1];
}
