// 2451 - Odd String Difference

function oddString(words) {
    function getDIA(str) {
        let res = '';
        for (let i = 1; i < len; i++) {
            res += `${str.charCodeAt(i) - str.charCodeAt(i - 1)} `;
        }
        return res;
    }
    const len = words[0].length;
    const diff1 = getDIA(words[0]);
    const diff2 = getDIA(words[1]);
    if (diff1 !== diff2) {
        return diff1 === getDIA(words.at(-1)) ? words[1] : words[0];
    }
    for (let i = 2; i < words.length; i++) {
        if (getDIA(words[i]) !== diff1) return words[i];
    }
}
