// 3163 - String Compression III

function compressedString(word) {
    let comp = '', i = 0;
    while (i < word.length) {
        let len = 1, char = word[i++];
        while (len < 9 && i < word.length && word[i] === char) len++, i++;
        comp += len + char;
    }
    return comp;
}
