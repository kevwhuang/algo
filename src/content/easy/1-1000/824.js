// 824 - Goat Latin

function toGoatLatin(sentence) {
    sentence = sentence.split(' ');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        word = vowels.has(word[0])
            ? word + 'ma'
            : word.slice(1) + word[0] + 'ma';
        word += 'a'.repeat(i + 1);
        sentence[i] = word;
    }
    return sentence.join(' ');
}
