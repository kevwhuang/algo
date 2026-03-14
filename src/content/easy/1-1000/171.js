// 171 - Excel Sheet Column Number

function titleToNumber(columnTitle) {
    let res = 0;
    for (let k = 1, i = columnTitle.length - 1; ~i; k *= 26, i--) {
        res += k * (columnTitle.charCodeAt(i) - 64);
    }
    return res;
}
