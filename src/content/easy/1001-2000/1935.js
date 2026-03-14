// 1935 - Maximum Number of Words You Can Type

function canBeTypedWords(text, brokenLetters) {
    let res = 0;
    const arr = text.split(' '), set = new Set(brokenLetters);
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        const n = arr[i].length;
        while (j < n && !set.has(arr[i][j])) j++;
        if (j === n) res++;
    }
    return res;
}
