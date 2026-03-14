// 2545 - Sort the Students by Their Kth Score

function sortTheStudents(score, k) {
    return score.sort((a, b) => b[k] - a[k]);
}
