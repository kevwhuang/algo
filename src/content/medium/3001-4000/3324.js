// 3324 - Find the Sequence of Strings Appeared on the Screen

function stringSequence(target) {
    const res = [];
    for (let i = 0; i < target.length; i++) {
        const prev = res.length ? res.at(-1) : '';
        const lim = target.charCodeAt(i);
        for (let code = 97; code <= lim; code++) {
            res.push(prev + String.fromCharCode(code));
        }
    }
    return res;
}
