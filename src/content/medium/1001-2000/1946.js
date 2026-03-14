// 1946 - Largest Number After Mutating Substring

function maximumNumber(num, change) {
    let i = -1;
    while (++i < num.length) {
        let n = num[i];
        if (n >= change[n]) continue;
        const start = i;
        let sub = String(change[n]);
        while (++i < num.length) {
            n = num[i];
            if (n > change[n]) break;
            sub += change[n];
        }
        return `${num.slice(0, start)}${sub}${num.slice(i)}`;
    }
    return num;
}
