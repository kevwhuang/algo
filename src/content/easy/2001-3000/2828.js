// 2828 - Check If a String Is an Acronym of Words

function isAcronym(words, s) {
    if (words.length !== s.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== words[i][0]) return false;
    }
    return true;
}
