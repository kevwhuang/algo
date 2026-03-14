// 151 - Reverse Words in a String

function reverseWords(s) {
    return s.split(' ').filter(Boolean).reverse().join(' ');
}
