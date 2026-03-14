// 1427 - Perform String Shifts

function stringShift(s, shift) {
    let acc = 0;
    for (let i = 0; i < shift.length; i++) {
        acc += shift[i][0] ? -shift[i][1] : shift[i][1];
    }
    if (acc === 0) return s;
    acc = (acc + s.length) % s.length;
    return s.slice(acc) + s.slice(0, acc);
}
