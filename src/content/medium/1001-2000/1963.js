// 1963 - Minimum Number of Swaps to Make the String Balanced

function minSwaps(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') count++;
        else if (count > 0) count--;
    }
    return Math.ceil(count / 2);
}
