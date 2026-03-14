// 1109 - Corporate Flight Bookings

function corpFlightBookings(bookings, n) {
    const res = new Array(n + 1).fill(0);
    for (let i = 0; i < bookings.length; i++) {
        const cur = bookings[i];
        res[cur[0] - 1] += cur[2];
        res[cur[1]] -= cur[2];
    }
    res.pop();
    for (let i = 1; i < n; i++) {
        res[i] += res[i - 1];
    }
    return res;
}
