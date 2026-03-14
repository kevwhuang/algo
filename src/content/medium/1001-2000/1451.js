// 1451 - Rearrange Words in a Sentence

function arrangeWords(text) {
    text = text.split(' ');
    text[0] = text[0].toLowerCase();
    text.sort((a, b) => a.length - b.length);
    text[0] = text[0][0].toUpperCase() + text[0].slice(1);
    return text.join(' ');
}
