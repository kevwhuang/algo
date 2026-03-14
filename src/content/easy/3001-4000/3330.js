// 3330 - Find the Original Typed String I

function possibleStringCount(word) {
    let res = 1, i = 0;
    while (++i < word.length) {
        while (word[i - 1] === word[i]) res++, i++;
    }
    return res;
}
