// 3450 - Maximum Students on a Single Bench

function maxStudentsOnBench(students) {
    const map = new Map();
    for (let i = 0; i < students.length; i++) {
        const cur = students[i][1];
        if (!map.has(cur)) map.set(cur, new Set());
        map.get(cur).add(students[i][0]);
    }
    let res = 0;
    map.forEach(e => res = Math.max(e.size, res));
    return res;
}
