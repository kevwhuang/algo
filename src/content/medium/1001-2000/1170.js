// 1170 - Compare Strings by Frequency of the Smallest Character

function numSmallerByFrequency(queries, words) {
    function getFreq(str) {
        let char = str[0], freq = 1;
        for (let i = 1; i < str.length; i++) {
            if (str[i] > char) continue;
            else if (str[i] === char) freq++;
            else {
                char = str[i];
                freq = 1;
            }
        }
        return freq;
    }
    for (let i = 0; i < words.length; i++) {
        words[i] = getFreq(words[i]);
    }
    words.sort((a, b) => b - a);
    const res = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        res[i] = 0;
        const target = getFreq(queries[i]);
        for (let j = 0; j < words.length; j++) {
            if (words[j] > target) res[i]++;
            else break;
        }
    }
    return res;
}
