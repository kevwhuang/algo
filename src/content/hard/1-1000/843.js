// 843 - Guess the Word

function findSecretWord(words, master) {
    while (true) {
        const s = words[Math.random() * words.length | 0];
        const tgt = master.guess(s);
        if (tgt === 6) return;
        const N = [];
        for (let i = 0; i < words.length; i++) {
            let sum = 0;
            const t = words[i];
            for (let j = 0; j < 6; j++) {
                if (s[j] === t[j]) sum++;
            }
            if (sum === tgt) N.push(t);
        }
        words = N;
    }
}
