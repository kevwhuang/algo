// 2185 - Counting Words With a Given Prefix

function prefixCount(words, pref) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) count++;
    }
    return count;
}
