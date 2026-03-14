// 686 - Repeated String Match

function repeatedStringMatch(a, b) {
    const repeats = Math.ceil(b.length / a.length);
    a = a.repeat(repeats);
    if (a.includes(b)) return repeats;
    a += a;
    return a.includes(b) ? repeats + 1 : -1;
}
