// 2942 - Find Words Containing Character

function findWordsContaining(words, x) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) res.push(i);
    }
    return res;
}
