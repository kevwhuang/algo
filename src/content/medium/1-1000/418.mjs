// 418 - Sentence Screen Fitting

function wordsTyping(sentence, rows, cols) {
    const set = new Set([-1]);
    for (let acc = 0, i = 0; i < sentence.length; i++) {
        acc += sentence[i].length + Boolean(i);
        set.add(acc);
    }
    let res = 0;
    const n = sentence.reduce((s, e) => s + e.length, sentence.length);
    while (rows--) {
        res += cols;
        if (set.has(res % n)) res++;
        else while (!set.has((res - 1) % n)) res--;
    }
    return res / n >> 0;
}
