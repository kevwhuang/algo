// 1859 - Sorting the Sentence

function sortSentence(s) {
    const words = s.split(' ');
    words.sort((a, b) => a.at(-1) - b.at(-1));
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, words[i].length - 1);
    }
    return words.join(' ');
}
