// 1839 - Longest Substring of All Vowels in Order

function longestBeautifulSubstring(word) {
    let max = 0, start = 0, vowels = 1;
    for (let i = 1; i < word.length; i++) {
        if (word[i - 1] < word[i]) vowels++;
        else if (word[i - 1] > word[i]) start = i, vowels = 1;
        if (vowels === 5) max = Math.max(i - start + 1, max);
    }
    return max;
}
