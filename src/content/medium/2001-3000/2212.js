// 2212 - Maximum Points in an Archery Competition

function maximumBobPoints(numArrows, aliceArrows) {
    function backtrack(indices) {
        if (indices.length === len) return update(indices);
        for (let i = indices.at(-1) - 1; i; i--) {
            indices.push(i);
            backtrack(indices);
            indices.pop();
        }
    }
    function update(indices) {
        let arrows = 0, i = 0;
        while (i < len) arrows += aliceArrows[indices[i++]] + 1;
        if (arrows > numArrows) return;
        const sum = indices.reduce((s, e) => s + e);
        if (sum <= max) return;
        max = sum;
        maxIndices = [...indices];
    }
    let max = 0, maxPossible = 66, maxIndices, len = 12;
    while (--len && max < maxPossible) {
        maxPossible -= 12 - len;
        let i = 12;
        while (--i) backtrack([i]);
    }
    const bobArrows = new Uint32Array(12);
    for (let i = 0; i < maxIndices.length; i++) {
        bobArrows[maxIndices[i]] = aliceArrows[maxIndices[i]] + 1;
    }
    bobArrows[0] = numArrows - bobArrows.reduce((s, e) => s + e);
    return bobArrows;
}
