// 1641 - Count Sorted Vowel Strings

function countVowelStrings(n) {
    let a = 1, e = 1, i = 1, o = 1;
    while (--n) {
        a += e + i + o + 1;
        e += i + o + 1;
        i += o + 1;
        o++;
    }
    return a + e + i + o + 1;
}
