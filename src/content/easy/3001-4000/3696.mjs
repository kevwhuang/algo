// 3696 - Maximum Distance Between Unequal Words in Array I

function maxDistance(words) {
    let res = 0;
    for (let l = 0; l < words.length; l++) {
        for (let r = words.length - 1; r >= l + res; r--) {
            if (words[l] !== words[r]) res = r - l + 1;
        }
    }
    return res;
}
