// 459 - Repeated Substring Pattern

function repeatedSubstringPattern(s) {
    return s.concat(s).slice(1, -1).includes(s);
}
