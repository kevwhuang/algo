// 1078 - Occurrences After Bigram

function findOcurrences(text, first, second) {
    text = text.split(' ');
    const res = [];
    for (let i = 2; i < text.length; i++) {
        if (text[i - 2] === first && text[i - 1] === second) res.push(text[i]);
    }
    return res;
}
