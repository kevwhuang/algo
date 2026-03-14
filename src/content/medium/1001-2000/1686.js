// 1686 - Stone Game VI

function stoneGameVI(aliceValues, bobValues) {
    const A = aliceValues, B = bobValues;
    const indices = Array.from({ length: A.length }, (_, i) => i);
    indices.sort((a, b) => A[b] + B[b] - A[a] - B[a]);
    let alice = 0;
    for (let i = 0; i < A.length; i += 2) {
        alice += A[indices[i]];
    }
    let bob = 0;
    for (let i = 1; i < B.length; i += 2) {
        bob += B[indices[i]];
    }
    return alice === bob ? 0 : alice > bob ? 1 : -1;
}
