// 1184 - Distance Between Bus Stops

function distanceBetweenBusStops(distance, start, destination) {
    let sum = 0, acc = 0;
    const min = Math.min(start, destination);
    const max = Math.max(start, destination);
    for (let i = 0; i < distance.length; i++) {
        sum += distance[i];
        if (min <= i && i < max) acc += distance[i];
    }
    return Math.min(acc, sum - acc);
}
