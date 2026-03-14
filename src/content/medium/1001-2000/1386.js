// 1386 - Cinema Seat Allocation

function maxNumberOfFamilies(n, reservedSeats) {
    const map = new Map();
    for (let i = 0; i < reservedSeats.length; i++) {
        const c = reservedSeats[i][1];
        if (c === 1 || c === 10) continue;
        const r = reservedSeats[i][0];
        map.set(r, (map.get(r) ?? 0) | 1 << c);
    }
    let groups = 2 * (n - map.size);
    for (const v of map.values()) {
        const case1 = !(v & 4 || v & 8 || v & 16 || v & 32);
        const case2 = !(v & 64 || v & 128 || v & 256 || v & 512);
        if (case1 && case2) groups += 2;
        else if (case1 || case2) groups++;
        else if (!(v & 16 || v & 32 || v & 64 || v & 128)) groups++;
    }
    return groups;
}
