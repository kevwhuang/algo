// 1408 - String Matching in an Array

function stringMatching(words) {
    return words.filter(e => words.some(f => e !== f && f.includes(e)));
}
