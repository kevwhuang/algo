// 2899 - Last Visited Integers

function lastVisitedIntegers(words) {
    const res = [], arr = [];
    for (let i = 0, k = 0; i < words.length; i++) {
        if (words[i] === -1) {
            res.push(++k <= arr.length ? arr[arr.length - k] : -1);
        } else {
            arr.push(words[i]);
            k = 0;
        }
    }
    return res;
}
