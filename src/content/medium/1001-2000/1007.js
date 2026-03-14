// 1007 - Minimum Domino Rotations for Equal Row

function minDominoRotations(tops, bottoms) {
    let min = Infinity;
    L: for (let n = 1; n <= 6; n++) {
        let swaps1 = 0, swaps2 = 0;
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== n && bottoms[i] !== n) continue L;
            if (tops[i] !== n) swaps1++;
            else if (bottoms[i] !== n) swaps2++;
        }
        min = Math.min(swaps1, swaps2, min);
    }
    return min === Infinity ? -1 : min;
}
