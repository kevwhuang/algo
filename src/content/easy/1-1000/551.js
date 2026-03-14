// 551 - Student Attendance Record I

function checkRecord(s) {
    let absent = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            if (absent) return false;
            absent = true;
        } else if (s[i] === 'L') {
            if (s[i - 1] === 'L' && s[i - 2] === 'L') return false;
        }
    }
    return true;
}
