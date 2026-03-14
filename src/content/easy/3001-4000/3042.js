// 3042 - Count Prefix and Suffix Pairs I

function countPrefixSuffixPairs(words) {
    let pairs = 0;
    for (let i = 0; i < words.length - 1; i++) {
        const cur = words[i];
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].startsWith(cur) && words[j].endsWith(cur)) pairs++;
        }
    }
    return pairs;
}
