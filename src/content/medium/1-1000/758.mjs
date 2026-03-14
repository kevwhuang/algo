// 758 - Bold Words in String

function boldWords(words, s) {
    const bold = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        let max = -Infinity, maxWord;
        for (let j = 0; j < words.length; j++) {
            if (!s.startsWith(words[j], i)) continue;
            if (words[j].length <= max) continue;
            max = words[j].length;
            maxWord = words[j];
        }
        if (!maxWord) continue;
        for (let j = 0; j < maxWord.length; j++) {
            bold[i + j] = true;
        }
    }
    let res = '', i = 0;
    while (i < bold.length) {
        if (bold[i]) {
            res += '<b>';
            while (bold[i]) res += s[i++];
            res += '</b>';
        } else {
            res += s[i++];
        }
    }
    return res;
}
