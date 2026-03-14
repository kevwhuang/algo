// 2788 - Split Strings by Separator

function splitWordsBySeparator(words, separator) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        const split = words[i].split(separator);
        for (let j = 0; j < split.length; j++) {
            if (split[j].length) res.push(split[j]);
        }
    }
    return res;
}
