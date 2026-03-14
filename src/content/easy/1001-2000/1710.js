// 1710 - Maximum Units on a Truck

function maximumUnits(boxTypes, truckSize) {
    let res = 0, i = -1;
    const arr = boxTypes.sort((a, b) => b[1] - a[1]);
    while (truckSize && ++i < boxTypes.length) {
        const boxes = Math.min(arr[i][0], truckSize), units = arr[i][1];
        res += boxes * units, truckSize -= boxes;
    }
    return res;
}
