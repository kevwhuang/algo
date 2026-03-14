// 3100 - Water Bottles II

function maxBottlesDrunk(numBottles, numExchange) {
    let bottles = 0, emptyBottles = 0;
    while (numBottles) {
        bottles += numBottles;
        emptyBottles += numBottles;
        numBottles = 0;
        while (emptyBottles >= numExchange) {
            emptyBottles -= numExchange++;
            numBottles++;
        }
    }
    return bottles;
}
