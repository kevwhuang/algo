// 820 - Short Encoding of Words

function minimumLengthEncoding(words) {
    const set = new Set(words);
    for (const word of set.keys()) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.slice(i));
        }
    }
    let len = set.size;
    for (const word of set.keys()) {
        len += word.length;
    }
    return len;
}
