// 2332 - The Latest Time to Catch a Bus

function latestTimeCatchTheBus(buses, passengers, capacity) {
    buses = new Uint32Array(buses).sort();
    passengers = new Uint32Array(passengers).sort();
    let time, count = 0, i = 0, j = 0;
    while (i < buses.length) {
        while (j < passengers.length) {
            if (passengers[j] > buses[i]) break;
            if (count === capacity) break;
            if (passengers[j - 1] + 1 !== passengers[j]) {
                time = passengers[j] - 1;
            }
            count++, j++;
        }
        if (count < capacity && buses[i] !== passengers[j - 1]) {
            time = buses[i];
        }
        count = 0, i++;
    }
    return time;
}
