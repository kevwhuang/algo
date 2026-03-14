// 3838 - Weighted Word Mapping

function mapWordWeights(words, weights) {
    let res = '';
    for (let i = 0; i < words.length; i++) {
        let sum = 0;
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            sum += weights[s.charCodeAt(j) - 97];
        }
        res += String.fromCharCode(122 - sum % 26);
    }
    return res;
}
