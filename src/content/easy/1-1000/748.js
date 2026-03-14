// 748 - Shortest Completing Word

function shortestCompletingWord(licensePlate, words) {
    licensePlate = licensePlate.toLowerCase();
    const map = new Map();
    for (let i = 0; i < licensePlate.length; i++) {
        const code = licensePlate.charCodeAt(i);
        if (97 <= code && code <= 122) {
            map.set(licensePlate[i], map.get(licensePlate[i]) + 1 || 1);
        }
    }
    const init = [...map.entries()];
    let completingWord, completingLength = Infinity;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length >= completingLength) continue;
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            const freq = map.get(letter);
            if (!freq) continue;
            if (freq === 1) map.delete(letter);
            else map.set(letter, freq - 1);
        }
        if (map.size === 0) {
            completingWord = word;
            completingLength = word.length;
        }
        for (let j = 0; j < init.length; j++) {
            map.set(init[j][0], init[j][1]);
        }
    }
    return completingWord;
}
