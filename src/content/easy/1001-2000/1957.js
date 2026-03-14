// 1957 - Delete Characters to Make Fancy String

function makeFancyString(s) {
    return s.replace(/(.)\1\1*/g, '$1$1');
}
