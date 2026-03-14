// 2777 - Date Range Generator

function* dateRangeGenerator(start, end, step) {
    start = new Date(start).valueOf();
    end = new Date(end).valueOf();
    step *= 86400000;
    while (start <= end) {
        yield new Date(start).toISOString().slice(0, 10);
        start += step;
    }
}
