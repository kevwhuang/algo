// 841 - Keys and Rooms

function canVisitAllRooms(rooms) {
    let Q = [0];
    const seen = new Set(Q);
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const arr = rooms[Q[i]];
            for (let j = 0; j < arr.length; j++) {
                if (seen.has(arr[j])) continue;
                seen.add(arr[j]);
                N.push(arr[j]);
            }
        }
        Q = N;
    }
    return seen.size === rooms.length;
}
