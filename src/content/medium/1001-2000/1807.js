// 1807 - Evaluate the Bracket Pairs of a String

function evaluate(s, knowledge) {
    knowledge = new Map(knowledge);
    const res = [];
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (str.length) res.push(str);
            str = '';
            const index = s.indexOf(')', i + 2);
            res.push(knowledge.get(s.slice(i + 1, index)) ?? '?');
            i += index - i;
        } else {
            str += s[i];
        }
    }
    if (str) res.push(str);
    return res.join('');
}
