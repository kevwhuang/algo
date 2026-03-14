// 3758 - Convert Number Words to Digits

function convertNumber(s) {
    let res = '', i = 0;
    while (i < s.length) {
        const t = s[i++];
        if (t === 'e') {
            if (s.startsWith('ight', i)) res += 8, i += 4;
        } else if (t === 'f') {
            if (s.startsWith('ive', i)) res += 5, i += 3;
            else if (s.startsWith('our', i)) res += 4, i += 3;
        } else if (t === 'n') {
            if (s.startsWith('ine', i)) res += 9, i += 3;
        } else if (t === 'o') {
            if (s.startsWith('ne', i)) res += 1, i += 2;
        } else if (t === 's') {
            if (s.startsWith('even', i)) res += 7, i += 4;
            else if (s.startsWith('ix', i)) res += 6, i += 2;
        } else if (t === 't') {
            if (s.startsWith('hree', i)) res += 3, i += 4;
            else if (s.startsWith('wo', i)) res += 2, i += 2;
        } else if (t === 'z') {
            if (s.startsWith('ero', i)) res += 0, i += 3;
        }
    }
    return res;
}
