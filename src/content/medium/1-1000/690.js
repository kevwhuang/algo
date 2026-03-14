// 690 - Employee Importance

function GetImportance(employees, id) {
    function dfs(employee) {
        const subs = employee.subordinates;
        for (let i = 0; i < subs.length; i++) {
            dfs(employees[obj[subs[i]]]);
        }
        importance += employee.importance;
    }
    const obj = {};
    for (let i = 0; i < employees.length; i++) {
        obj[employees[i].id] = i;
    }
    let importance = 0;
    dfs(employees[obj[id]]);
    return importance;
}
