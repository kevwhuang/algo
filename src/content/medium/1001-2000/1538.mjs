// 1538 - Guess the Majority in a Hidden Array

function guessMajority(reader) {
    let idx, count = 1;
    const q1234 = reader.query(1, 2, 3, 4);
    reader.query(0, 2, 3, 4) === q1234 ? count++ : idx = 1;
    reader.query(0, 1, 3, 4) === q1234 ? count++ : idx = 2;
    reader.query(0, 1, 2, 4) === q1234 ? count++ : idx = 3;
    const q0123 = reader.query(0, 1, 2, 3);
    const n = reader.length(), nn = n / 2;
    for (let i = 4; i < n; i++) {
        if (reader.query(1, 2, 3, i) !== q0123) idx = i;
        else if (++count > nn) return 0;
    }
    return count < nn ? idx : count > nn ? 0 : -1;
}
