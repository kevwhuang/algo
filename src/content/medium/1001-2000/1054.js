// 1054 - Distant Barcodes

function rearrangeBarcodes(barcodes) {
    const map = new Map();
    for (let i = 0; i < barcodes.length; i++) {
        map.set(barcodes[i], (map.get(barcodes[i]) ?? 0) + 1);
    }
    const arr = [...map].sort((a, b) => b[1] - a[1]);
    for (let i = 0, j = 0; j < arr.length; j++) {
        while (arr[j][1]--) {
            barcodes[i] = arr[j][0];
            i += 2;
            if (i >= barcodes.length) i = 1;
        }
    }
    return barcodes;
}
