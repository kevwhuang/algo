// 65 - Valid Number

function isNumber(s) {
    return !s.includes('Infinity') && !isNaN(s);
}
