// 1700 - Number of Students Unable to Eat Lunch

function countStudents(students, sandwiches) {
    let idx = 0;
    const n = sandwiches.length;
    while (true) {
        let d = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i] !== sandwiches[idx]) continue;
            delete students[i];
            idx++, d++;
        }
        if (idx === n) return 0;
        if (d === 0) return n - idx;
        students = students.flat();
    }
}
