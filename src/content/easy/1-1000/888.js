// 888 - Fair Candy Swap

function fairCandySwap(aliceSizes, bobSizes) {
    const aliceTotal = aliceSizes.reduce((s, e) => s + e, 0);
    const bobTotal = bobSizes.reduce((s, e) => s + e, 0);
    const diff = (aliceTotal - bobTotal) / 2;
    aliceSizes = new Set(aliceSizes);
    for (let i = 0, cur; i < bobSizes.length; i++) {
        cur = bobSizes[i];
        if (aliceSizes.has(cur + diff)) return [cur + diff, cur];
    }
}
