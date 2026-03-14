// 1580 - Put Boxes Into the Warehouse II

function maxBoxesInWarehouse(boxes, warehouse) {
    const m = boxes.length, n = warehouse.length;
    let min = 1e9, minIdx;
    for (let i = 0; i < n; i++) {
        if (warehouse[i] < min) min = warehouse[i], minIdx = i;
    }
    for (let i = 1; i < minIdx; i++) {
        warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
    }
    for (let i = n - 2; i > minIdx; i--) {
        warehouse[i] = Math.min(warehouse[i + 1], warehouse[i]);
    }
    boxes = new Uint32Array(boxes).sort();
    warehouse = new Uint32Array(warehouse).sort();
    let i = 0, j = 0;
    while (i < m && j < n) boxes[i] <= warehouse[j++] && i++;
    return i;
}
