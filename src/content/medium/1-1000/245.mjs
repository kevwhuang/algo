// 245 - Shortest Word Distance III

function shortestWordDistance(wordsDict, word1, word2) {
    let min = Infinity, prev1, prev2;
    if (word1 === word2) {
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                if (prev1 >= 0) min = Math.min(i - prev1, min);
                prev1 = i;
            }
        }
    } else {
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                if (prev2 >= 0) min = Math.min(i - prev2, min);
                prev1 = i;
            } else if (wordsDict[i] === word2) {
                if (prev1 >= 0) min = Math.min(i - prev1, min);
                prev2 = i;
            }
        }
    }
    return min;
}
