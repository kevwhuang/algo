// 3498 - Reverse Degree of a String

function reverseDegree(s) {
    let res = 0, i = 0;
    while (i < s.length) res += (123 - s.charCodeAt(i)) * ++i;
    return res;
}
