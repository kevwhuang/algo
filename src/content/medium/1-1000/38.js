// 38 - Count and Say

function countAndSay(n) {
    function count(str) {
        let say = '';
        for (let i = 1, j = 0; i <= str.length; i++) {
            if (str[i] === str[j]) continue;
            say += `${i - j}${str[j]}`;
            j = i;
        }
        return say;
    }
    if (n === 1) return '1';
    return count(countAndSay(n - 1));
}
