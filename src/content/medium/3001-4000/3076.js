// 3076 - Shortest Uncommon Substring in an Array

function shortestSubstrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i], set = new Set();
        for (let j = 0; j < str.length; j++) {
            let substr = '';
            for (let k = j; k < str.length; k++) {
                substr += str[k];
                set.add(substr);
            }
        }
        arr[i] = set;
    }
    const res = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let min = '';
        L: for (const substr of arr[i]) {
            if (min.length && substr.length > min.length) continue;
            if (substr.length === min.length && substr > min) continue;
            for (let j = 0; j < arr.length; j++) {
                if (i === j) continue;
                if (arr[j].has(substr)) continue L;
            }
            min = substr;
        }
        res[i] = min;
    }
    return res;
}
