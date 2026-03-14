// 3271 - Hash Divided String

function stringHash(s, k) {
    let res = '', i = 0;
    while (i < s.length) {
        let code = 0, rem = k;
        while (~--rem) code += s.charCodeAt(i++) - 97;
        res += String.fromCharCode(code % 26 + 97);
    }
    return res;
}
