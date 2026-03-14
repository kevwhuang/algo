// 2512 - Reward Top K Students

function topStudents(positive_feedback, negative_feedback, report, student_id, k) {
    positive_feedback = new Set(positive_feedback);
    negative_feedback = new Set(negative_feedback);
    const arr = new Array(report.length);
    for (let i = 0; i < report.length; i++) {
        const cur = report[i].split(' ');
        let positive = 0, negative = 0;
        for (let j = 0; j < cur.length; j++) {
            const word = cur[j];
            if (positive_feedback.has(word)) positive++;
            else if (negative_feedback.has(word)) negative++;
        }
        arr[i] = [3 * positive - negative, student_id[i]];
    }
    arr.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    const res = new Array(k);
    for (let i = 0; i < k; i++) {
        res[i] = arr[i][1];
    }
    return res;
}
