// 2255 - Count Prefixes of a Given String

function countPrefixes(words, s) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (s.startsWith(words[i])) count++;
    }
    return count;
}
