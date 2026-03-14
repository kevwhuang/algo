// 2933 - High-Access Employees

function findHighAccessEmployees(access_times) {
    function comparator(a, b) {
        return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]);
    }
    access_times.sort(comparator);
    const set = new Set(), bound = access_times.length - 2;
    for (let i = 0; i < bound; i++) {
        const t1 = access_times[i], t2 = access_times[i + 2];
        if (t1[0] !== t2[0]) continue;
        let min = 60 * (t2[1].slice(0, 2) - t1[1].slice(0, 2));
        min += t2[1].slice(2) - t1[1].slice(2);
        if (min < 60) set.add(t1[0]);
    }
    return [...set];
}
