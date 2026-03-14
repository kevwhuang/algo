// 1880 - Check If Word Equals Summation of Two Words

function isSumEqual(firstWord, secondWord, targetWord) {
    function check(s) {
        let res = '';
        for (let i = 0; i < s.length; i++) {
            res += s.charCodeAt(i) - 97;
        }
        return parseInt(res);
    }
    return check(firstWord) + check(secondWord) === check(targetWord);
}
