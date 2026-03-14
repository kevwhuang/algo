// 937 - Reorder Data in Log Files

function reorderLogFiles(logs) {
    const res = [], digitLogs = [];
    for (let i = 0; i < logs.length; i++) {
        const index = logs[i].indexOf(' ');
        if (isNaN(logs[i][index + 1])) {
            res.push([logs[i].slice(0, index), logs[i].slice(index + 1)]);
        } else {
            digitLogs.push(i);
        }
    }
    res.sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
    for (let i = 0; i < res.length; i++) {
        res[i] = `${res[i][0]} ${res[i][1]}`;
    }
    for (let i = 0; i < digitLogs.length; i++) {
        res.push(logs[digitLogs[i]]);
    }
    return res;
}
