// 3683 - Earliest Time to Finish One Task

function earliestTime(tasks) {
    let res = 200, i = -1;
    while (++i < tasks.length) res = Math.min(tasks[i][0] + tasks[i][1], res);
    return res;
}
