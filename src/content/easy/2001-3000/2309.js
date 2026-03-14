// 2309 - Greatest English Letter in Upper and Lower Case

function greatestLetter(s) {
    const lower = new Uint8Array(26);
    const upper = new Uint8Array(26);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (97 <= code && code <= 122) lower[code - 97] = 1;
        else upper[code - 65] = 1;
    }
    for (let i = 25; ~i; i--) {
        if (lower[i] === 0 || upper[i] === 0) continue;
        return String.fromCharCode(i + 65);
    }
    return '';
}
