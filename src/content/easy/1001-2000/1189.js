// 1189 - Maximum Number of Balloons

function maxNumberOfBalloons(text) {
    const B = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (let i = 0; i < text.length; i++) {
        if (text[i] in B) B[text[i]]++;
    }
    B.l >>= 1, B.o >>= 1;
    return Math.min(...Object.values(B));
}
