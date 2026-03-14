// 1087 - Brace Expansion

function expand(s) {
    let res = [], i = 0;
    while (i < s.length) {
        if (s[i] === '{') {
            const index = s.indexOf('}', i + 2);
            const chars = s.slice(i + 1, index).split(',').sort();
            const arr = new Array(res.length * chars.length);
            for (let j = 0; j < res.length; j++) {
                for (let k = 0; k < chars.length; k++) {
                    arr[j * chars.length + k] = `${res[j]}${chars[k]}`;
                }
            }
            res = res.length === 0 ? chars : arr;
            i = index + 1;
        } else {
            const char = s[i++];
            for (let j = 0; j < res.length; j++) {
                res[j] += char;
            }
            if (res.length === 0) res = [char];
        }
    }
    return res;
}
