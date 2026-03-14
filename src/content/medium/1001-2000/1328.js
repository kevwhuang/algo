// 1328 - Break a Palindrome

function breakPalindrome(palindrome) {
    if (palindrome.length === 1) return '';
    const bound = ~~(palindrome.length / 2);
    let i = 0;
    while (i < bound) {
        if (palindrome[i] !== 'a') break;
        else i++;
    }
    if (i === bound) return `${palindrome.slice(0, -1)}b`;
    return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
}
