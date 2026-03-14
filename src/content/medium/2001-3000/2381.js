// 2381 - Shifting Letters II

function shiftingLetters(s, shifts) {
    const arr = new Array(s.length + 1).fill(0);
    for (let i = 0; i < shifts.length; i++) {
        const shift = shifts[i][2] ? 1 : -1;
        arr[shifts[i][0]] += shift;
        arr[shifts[i][1] + 1] -= shift;
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }
    const res = s.split('');
    for (let i = 0; i < res.length; i++) {
        if (arr[i] === 0) continue;
        let code = s.charCodeAt(i) + arr[i] - 97;
        code %= 26;
        if (code < 0) code += 26;
        res[i] = String.fromCharCode(code + 97);
    }
    return res.join('');
}
