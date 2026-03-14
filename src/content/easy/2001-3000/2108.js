// 2108 - Find First Palindromic String in the Array

function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let l = 0, r = word.length - 1;
        while (l <= r && word[l] === word[r]) l++, r--;
        if (l > r) return word;
    }
    return '';
}
