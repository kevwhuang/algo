// 3035 - Maximum Palindromes After Operations

function maxPalindromesAfterOperations(words) {
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            bucket[word.charCodeAt(j) - 97]++;
        }
        words[i] = word.length;
    }
    let pairs = 0, singles = 0;
    for (let i = 0; i < 26; i++) {
        pairs += ~~(bucket[i] / 2);
        if (bucket[i] % 2) singles++;
    }
    words.sort((a, b) => a - b);
    let palindromes = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] % 2) {
            if (singles) singles--;
            else pairs -= .5;
            words[i]--;
        }
        if (words[i] / 2 > pairs) break;
        pairs -= words[i] / 2;
        palindromes++;
    }
    return palindromes;
}
