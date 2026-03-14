// 2105 - Watering Plants II

function minimumRefill(plants, capacityA, capacityB) {
    let refills = 0, a = capacityA, b = capacityB;
    let l = 0, r = plants.length - 1;
    while (l < r) {
        if (a < plants[l]) a = capacityA, refills++;
        if (b < plants[r]) b = capacityB, refills++;
        a -= plants[l++];
        b -= plants[r--];
    }
    if (l === r && a < plants[l] && b < plants[r]) refills++;
    return refills;
}
