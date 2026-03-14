// 1945 - Sum of Digits of String After Convert

function getLucky(s, k) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s.charCodeAt(i) - 96;
    }
    while (k--) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
        str = String(sum);
    }
    return Number(str);
}
