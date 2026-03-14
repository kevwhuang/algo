// 3798 - Largest Even Number

function largestEven(s) {
    let i = s.length - 1;
    while (~i && s[i] % 2) i--;
    return s.slice(0, i + 1);
}
