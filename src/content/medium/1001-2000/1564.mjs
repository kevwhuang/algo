// 1564 - Put Boxes Into the Warehouse I

function maxBoxesInWarehouse(boxes, warehouse) {
    boxes = new Uint32Array(boxes).sort();
    for (let i = 1; i < warehouse.length; i++) {
        warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
    }
    let i = 0, j = warehouse.length - 1;
    while (i < boxes.length && ~j) boxes[i] <= warehouse[j--] && i++;
    return i;
}
