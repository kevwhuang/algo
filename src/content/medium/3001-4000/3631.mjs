// 3631 - Sort Threats by Severity and Exploitability

function sortThreats(threats) {
    const fn = (a, b) => 2 * b[1] + b[2] - 2 * a[1] - a[2] || a[0] - b[0];
    return threats.sort(fn);
}
