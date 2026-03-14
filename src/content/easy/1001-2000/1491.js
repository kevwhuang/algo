// 1491 - Average Salary Excluding the Minimum and Maximum Salary

function average(salary) {
    let sum = 0, min = Infinity, max = -Infinity;
    for (let i = 0; i < salary.length; i++) {
        const cur = salary[i];
        sum += cur, min = Math.min(cur, min), max = Math.max(cur, max);
    }
    return (sum - min - max) / (salary.length - 2);
}
