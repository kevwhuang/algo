// 401 - Binary Watch

function readBinaryWatch(turnedOn) {
    if (turnedOn === 0) return ['0:00'];
    if (turnedOn >= 9) return [];
    const dict = [
        0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3,
        2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4,
        2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3,
        2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5,
        2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5,
    ];
    const res = [];
    for (let hour = 0; hour <= 11; hour++) {
        for (let min = 0; min <= 59; min++) {
            if (dict[hour] + dict[min] !== turnedOn) continue;
            res.push(`${hour}:${min.toString().padStart(2, 0)}`);
        }
    }
    return res;
}
