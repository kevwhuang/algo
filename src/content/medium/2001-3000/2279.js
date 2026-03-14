// 2279. Maximum Bags With Full Capacity of Rocks

function maximumBags(capacity, rocks, additionalRocks) {
    for (let i = 0; i < capacity.length; i++) {
        capacity[i] -= rocks[i];
    }
    capacity.sort((a, b) => a - b);
    let bags = 0;
    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] === 0) bags++;
        else if (additionalRocks < capacity[i]) break;
        else additionalRocks -= capacity[i], bags++;
    }
    return bags;
}
