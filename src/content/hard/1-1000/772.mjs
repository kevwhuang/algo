// 772 - Basic Calculator III

function calculate(s) {
    let acc, i = -1;
    while (++i < s.length) {
        if (s[i] !== '/') continue;
        let l = i - 1;
        if (s[l] !== ')') while (!isNaN(s[l - 1])) l--;
        else if (acc = 1) {
            while (acc) {
                if (s[--l] === ')') acc++;
                else if (s[l] === '(') acc--;
            }
        }
        if (s[l - 1] === '*') continue;
        let r = i + 1;
        if (s[r] !== '(') while (!isNaN(s[r + 1])) r++;
        else if (acc = 1) {
            while (acc) {
                if (s[++r] === '(') acc++;
                else if (s[r] === ')') acc--;
            }
        }
        s = `${s.slice(0, l)}~~(${s.slice(l, r + 1)})${s.slice(r + 1)}`;
        i += 3;
    }
    return eval(s);
}
