// 1518 - Water Bottles

function numWaterBottles(numBottles, numExchange) {
    let res = 0, acc = 0, cur = numBottles;
    while (cur) {
        const d = (acc + cur) / numExchange >> 0;
        res += cur, acc = (acc + cur) % numExchange, cur = d;
    }
    return res;
}
