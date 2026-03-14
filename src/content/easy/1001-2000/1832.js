// 1832 - Check If the Sentence Is Pangram

function checkIfPangram(sentence) {
    return new Set(sentence).size === 26;
}
