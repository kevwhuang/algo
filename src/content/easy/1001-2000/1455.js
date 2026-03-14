// 1455 - Check If a Word Occurs as a Prefix of Any Word in a Sentence

function isPrefixOfWord(sentence, searchWord) {
    let acc = 1, i = 0;
    do {
        if (sentence.startsWith(searchWord, i)) return acc;
        i = sentence.indexOf(' ', i) + 1;
    } while (acc++ && i);
    return -1;
}
