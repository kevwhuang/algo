// 1665 - Minimum Initial Energy to Finish Tasks

function minimumEffort(tasks) {
    const arr = tasks.sort((a, b) => a[1] + b[0] - a[0] - b[1]);
    let res = 0, i = -1;
    while (++i < arr.length) res = Math.max(res + arr[i][0], arr[i][1]);
    return res;
}
