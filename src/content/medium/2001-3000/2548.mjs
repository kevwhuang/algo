// 2548 - Maximum Price to Fill a Bag

function maxPrice(items, capacity) {
    items.sort((a, b) => b[0] / b[1] - a[0] / a[1]);
    for (let i = 0, acc = 0; i < items.length; i++) {
        const price = items[i][0], weight = items[i][1];
        if (items[i][1] >= capacity) return acc + capacity * price / weight;
        acc += price, capacity -= weight;
    }
    return -1;
}
