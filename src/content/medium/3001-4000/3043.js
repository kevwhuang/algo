// 3043 - Find the Length of the Longest Common Prefix

function longestCommonPrefix(arr1, arr2) {
    const set = new Set();
    for (let i = 0; i < arr1.length; i++) {
        while (arr1[i]) {
            set.add(arr1[i]);
            arr1[i] = arr1[i] / 10 >> 0;
        }
    }
    let max = 0;
    for (let i = 0; i < arr2.length; i++) {
        while (arr2[i]) {
            if (set.has(arr2[i])) {
                let digits = 0;
                while (arr2[i]) {
                    arr2[i] = arr2[i] / 10 >> 0;
                    digits++;
                }
                max = Math.max(digits, max);
                break;
            }
            arr2[i] = arr2[i] / 10 >> 0;
        }
    }
    return max;
}
