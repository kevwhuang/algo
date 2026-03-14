// 1094 - Car Pooling

function carPooling(trips, capacity) {
    const arr = new Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        arr[trips[i][1]] += trips[i][0];
        arr[trips[i][2]] -= trips[i][0];
    }
    let running = 0;
    for (let i = 0; i < 1001; i++) {
        running += arr[i];
        if (running > capacity) return false;
    }
    return true;
}
