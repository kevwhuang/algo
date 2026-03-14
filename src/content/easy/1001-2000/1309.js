// 1309 - Decrypt String From Alphabet to Integer Mapping

function freqAlphabets(s) {
    let decrypted = '', i = 0;
    while (i < s.length) {
        if (s[i + 2] === '#') {
            decrypted += String.fromCharCode(+(s[i] + s[i + 1]) + 96);
            i += 3;
        } else {
            decrypted += String.fromCharCode(+s[i++] + 96);
        }
    }
    return decrypted;
}
