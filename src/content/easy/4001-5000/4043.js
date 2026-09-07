// 4043. Count Rotations With Exactly K Equal Adjacent Pairs

function countRotations(s, k) {
    let acc = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === s[(i + 1) % n]) acc++;
    }
    return k === acc - 1 ? acc : k === acc ? n - acc : 0;
}
