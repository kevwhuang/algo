// 893 - Groups of Special-Equivalent Strings

function numSpecialEquivGroups(words) {
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const even = new Array(26).fill(0);
        const odd = new Array(26).fill(0);
        for (let j = 0; j < word.length; j++) {
            const code = word.charCodeAt(j) - 97;
            j % 2 ? odd[code]++ : even[code]++;
        }
        set.add(even + odd);
    }
    return set.size;
}
