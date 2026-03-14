// 520 - Detect Capital

function detectCapitalUse(word) {
    return /^([A-Z]+|.[a-z]*)$/.test(word);
}
