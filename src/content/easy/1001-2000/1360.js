// 1360 - Number of Days Between Two Dates

function daysBetweenDates(date1, date2) {
    return Math.abs(new Date(date2) - new Date(date1)) / 86400000;
}
