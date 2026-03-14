// 848 - Shifting Letters

function shiftingLetters(s, shifts) {
    for (let i = shifts.length - 2; i >= 0; i--) {
        shifts[i] += shifts[i + 1];
    }
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const code = (s.charCodeAt(i) + shifts[i] - 97) % 26;
        res += String.fromCharCode(code + 97);
    }
    return res;
}
