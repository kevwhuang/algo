// 966 - Vowel Spellchecker

function spellchecker(wordlist, queries) {
    const words = new Set();
    const lower = new Map();
    const vowels = new Map();
    const re = /[aeiou]/g;
    for (let i = 0; i < wordlist.length; i++) {
        let word = wordlist[i];
        words.add(word);
        word = word.toLowerCase();
        if (!lower.has(word)) lower.set(word, wordlist[i]);
        word = word.replace(re, '#');
        if (!vowels.has(word)) vowels.set(word, wordlist[i]);
    }
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        if (words.has(query)) continue;
        query = query.toLowerCase();
        if (lower.has(query)) {
            queries[i] = lower.get(query);
        } else {
            query = query.replace(re, '#');
            queries[i] = vowels.has(query) ? vowels.get(query) : '';
        }
    }
    return queries;
}
