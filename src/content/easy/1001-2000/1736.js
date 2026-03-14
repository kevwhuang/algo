// 1736 - Latest Time by Replacing Hidden Digits

function maximumTime(time) {
    let h1 = time[0], h2 = time[1], m1 = time[3], m2 = time[4];
    if (h1 === '?') h1 = h2 !== '?' && h2 > '3' ? '1' : '2';
    if (h2 === '?') h2 = h1 === '2' ? '3' : '9';
    if (m1 === '?') m1 = '5';
    if (m2 === '?') m2 = '9';
    return `${h1}${h2}:${m1}${m2}`;
}
