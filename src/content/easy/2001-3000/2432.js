// 2432 - The Employee That Worked on the Longest Task

function hardestWorker(n, logs) {
    let res = logs[0][0], max = logs[0][1];
    for (let i = 1; i < logs.length; i++) {
        const time = logs[i][1] - logs[i - 1][1];
        if (time > max) {
            res = logs[i][0];
            max = time;
        } else if (time === max) {
            res = Math.min(logs[i][0], res);
        }
    }
    return res;
}
