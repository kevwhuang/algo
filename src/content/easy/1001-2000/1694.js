// 1694 - Reformat Phone Number

function reformatNumber(number) {
    let res = '', i = 0;
    const num = number.replace(/[ -]/g, '');
    while (true) {
        const d = num.length - i;
        if (d === 2 || d === 3) res += num.slice(i);
        else if (d === 4) res += `${num.slice(i, i + 2)}-${num.slice(i + 2)}`;
        if (d === 2 || d === 3 || d === 4) break;
        res += num.slice(i, i + 3) + '-', i += 3;
    }
    return res;
}
