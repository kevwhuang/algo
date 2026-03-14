// 243 - Shortest Word Distance

function shortestDistance(wordsDict, word1, word2) {
    let min = Infinity, i = -1, j = -Infinity, k = -Infinity;
    while (++i < wordsDict.length) {
        if (wordsDict[i] === word1) min = Math.min(i - k, min), j = i;
        else if (wordsDict[i] === word2) min = Math.min(i - j, min), k = i;
    }
    return min;
}
