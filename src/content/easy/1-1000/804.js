// 804 - Unique Morse Code Words

function uniqueMorseRepresentations(words) {
    const morse = [
        '.-', '-...', '-.-.', '-..', '.', '..-.', '--.',
        '....', '..', '.---', '-.-', '.-..', '--', '-.',
        '---', '.--.', '--.-', '.-.', '...', '-', '..-',
        '...-', '.--', '-..-', '-.--', '--..',
    ];
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let encoded = '';
        for (let j = 0; j < word.length; j++) {
            encoded += morse[word.charCodeAt(j) - 97];
        }
        set.add(encoded);
    }
    return set.size;
}
