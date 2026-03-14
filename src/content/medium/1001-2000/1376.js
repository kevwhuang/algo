// 1376 - Time Needed to Inform All Employees

function numOfMinutes(n, headID, manager, informTime) {
    function traverse(i) {
        if (manager[i] !== -1) {
            informTime[i] += traverse(manager[i]);
            manager[i] = -1;
        }
        return informTime[i];
    }
    let time = 0;
    for (let i = 0; i < manager.length; i++) {
        time = Math.max(traverse(i), time);
    }
    return time;
}
