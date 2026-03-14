// 3259 - Maximum Energy Boost From Two Drinks

function maxEnergyBoost(energyDrinkA, energyDrinkB) {
    let a = 0, aa = 0, b = 0, bb = 0, i = -1;
    while (++i < energyDrinkA.length) {
        a = Math.max(aa + energyDrinkA[i], bb);
        b = Math.max(bb + energyDrinkB[i], aa);
        aa = a, bb = b;
    }
    return Math.max(a, b);
}
