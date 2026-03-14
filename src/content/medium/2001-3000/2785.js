// 2785 - Sort Vowels in a String

function sortVowels(s) {
    s = s.split('');
    const vowels = [];
    const set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) vowels.push(s[i]);
    }
    vowels.sort();
    for (let i = 0, j = 0; i < s.length; i++) {
        if (set.has(s[i])) s[i] = vowels[j++];
    }
    return s.join('');
}
