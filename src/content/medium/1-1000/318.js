// 318 - Maximum Product of Word Lengths

function maxProduct(words) {
    const len = words.length;
    const masks = new Array(len);
    for (let i = 0; i < len; i++) {
        const word = words[i];
        let mask = 0;
        for (let j = 0; j < word.length; j++) {
            mask |= 1 << word.charCodeAt(j) - 97;
        }
        masks[i] = mask;
    }
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (masks[i] & masks[j]) continue;
            max = Math.max(words[i].length * words[j].length, max);
        }
    }
    return max;
}
