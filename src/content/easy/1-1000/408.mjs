// 408 - Valid Word Abbreviation

function validWordAbbreviation(word, abbr) {
    let i = 0, j = 0;
    while (j < abbr.length) {
        if (isNaN(abbr[j])) {
            if (word[i++] !== abbr[j++]) return false;
        } else {
            if (abbr[j] === '0') return false;
            let num = 0;
            while (j < abbr.length && !isNaN(abbr[j])) {
                num = 10 * num + Number(abbr[j++]);
            }
            i += num;
        }
    }
    return i === word.length;
}
